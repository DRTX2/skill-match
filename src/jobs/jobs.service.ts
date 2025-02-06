import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class JobsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createJobDto: CreateJobDto) {
    const { title, description, salary, clientId, workerId } = createJobDto;
    try {
      return await this.databaseService.job.create({
        data: {
          title,
          description,
          salary,
          client: { connect: { id: clientId } },
          worker: workerId
            ? { connect: { id: workerId } }
            : undefined,
        },
      });
    } catch (error) {
      throw new BadRequestException(`Error al crear el trabajo: ${error.message}`);
    }
  }

  async findOne(id: number) {
    const job = await this.databaseService.job.findUnique({
      where: { id },
      include: { client: true, worker: true },
    });

    if (!job) throw new NotFoundException(`Trabajo con id ${id} no encontrado`);

    return job;
  }

  async update(id: number, updateJobDto: UpdateJobDto) {
    await this.findOne(id); 

    try {
      return await this.databaseService.job.update({
        where: { id },
        data: updateJobDto
      });
    } catch (error) {
      throw new BadRequestException(`Error al actualizar el trabajo: ${error.message}`);
    }
  }

  async remove(id: number) {
    await this.findOne(id); 

    try {
      return await this.databaseService.job.delete({ where: { id } });
    } catch (error) {
      throw new BadRequestException(`Error al eliminar el trabajo: ${error.message}`);
    }
  }
}
