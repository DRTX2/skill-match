import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProjectDto: CreateProjectDto) {
    const { name, description, budget, clientId, workerId } = createProjectDto;

    try {
      return await this.databaseService.project.create({
        data: {
          name,
          description,
          budget,
          //segun gpt los undefined son ignorados asi q no hace falta el ternario
          client: clientId
            ? {
                connect: { id: clientId },
              }
            : undefined,
          worker: workerId
            ? {
                connect: { id: workerId },
              }
            : undefined,
        },
      });
    } catch (error) {
      throw new BadRequestException('Error al crear el proyecto');
    }
  }

  async findOne(id: number) {
    const project = await this.databaseService.project.findUnique({
      where: { id },
      include: { client: true, worker: true, tasks: true },
    });
    if (!project)
      throw new NotFoundException(`Proyecto con id: ${id}, no encontrado`);
    return project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    await this.findOne(id);

    try {
      //si no se encontro lanzaria la excepcion
      return await this.databaseService.project.update({
        where: { id },
        data: updateProjectDto,
      });
    } catch (error) {
      throw new BadRequestException(`Error al actualizar el proyecto: ${error.message}, `);
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    try {
      return await this.databaseService.project.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException(`Error al eliminar el proyecto: ${error.message}`);
    }
  }


}
