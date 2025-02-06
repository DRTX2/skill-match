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

  async findAllByClient(clientId: number) {
    const projects = await this.databaseService.project.findMany({
      where: {
        clientId,
      },
      include: {
        tasks: true,
        worker: true,
      },
    });

    if (!projects || projects.length === 0) {
      throw new NotFoundException(`No se encontraron proyectos para el cliente con id ${clientId}`);
    }

    return projects;
  }

  // Método para obtener todos los proyectos de un trabajador
  async findAllByWorker(workerId: number) {
    const projects = await this.databaseService.project.findMany({
      where: {
        workerId,
      },
      include: {
        tasks: true,
        client: true,
      },
    });

    if (!projects || projects.length === 0) {
      throw new NotFoundException(`No se encontraron proyectos para el trabajador con id ${workerId}`);
    }

    return projects;
  }

  /*
  // Método para obtener proyectos con tareas pendientes
  async findProjectsWithPendingTasks() {
    const projects = await this.databaseService.project.findMany({
      where: {
        tasks: {
          some: {
            status: 'PENDING', // Suponiendo que tienes un campo status en Task
          },
        },
      },
      include: {
        tasks: true,
      },
    });

    return projects;
  }
  */

  // Método para obtener proyectos cuyo presupuesto ha sido excedido
  async findProjectsExceedingBudget() {
    const projects = await this.databaseService.project.findMany({
      where: {
        budget: {
          lt: 0, // Suponiendo que 'budget' es negativo si excede el presupuesto
        },
      },
    });

    return projects;
  }

  /*
  // Método para cambiar el estado del proyecto
  async changeProjectStatus(projectId: number, status: string) {
    const project = await this.findOne(projectId);

    if (!project) {
      throw new NotFoundException(`Proyecto con id ${projectId} no encontrado`);
    }

    return await this.databaseService.project.update({
      where: { id: projectId },
      data: {
        status, // Suponiendo que hay un campo "status" en Project
      },
    });
  }
  */

}
