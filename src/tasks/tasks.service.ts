import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TasksService {
  constructor(private readonly databaseService:DatabaseService){}

  async create(createTaskDto: CreateTaskDto) {
    const {title, description, projectId,assignedToId}=createTaskDto;

    try{
      await this.databaseService.task.create({
        data:{
          title,
          description,
          project:{connect:{id:projectId}},
          assignedTo:assignedToId?{connect:{id:assignedToId}}:undefined,
        }
      });
    }catch(error){
      throw new BadRequestException(`Error al crear tarea: ${error.message}`);
    }
  }

  async findAll(projectId:number) {
    return await this.databaseService.task.findMany({
      where:{projectId},
      include:{project:true,assignedTo:true}
    });
  }

  async findOne(id: number) {
    const task= await this.databaseService.task.findUnique({
      where:{id},
      include:{project:true,assignedTo:true}
    })
    if(!task)
        throw new NotFoundException(`Tarea con id: ${id}, no encontrada`);
      return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.findOne(id); 

    try {
      return await this.databaseService.task.update({
        where: { id },
        data: updateTaskDto,
      });
    } catch (error) {
      throw new BadRequestException(`Error al actualizar la tarea: ${error.message}`);
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    try {
      return await this.databaseService.task.delete({ where: { id } });
    } catch (error) {
      throw new BadRequestException(`Error al eliminar la tarea: ${error.message}`);
    }
  }
}
