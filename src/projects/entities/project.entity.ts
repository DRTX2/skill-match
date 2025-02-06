import { Task } from "src/tasks/entities/task.entity";
import { User } from "src/users/entities/user.entity";

export class Project {
    id: number;
    name: string;
    description: string;
    budget: number;
    clientId: number;
    workerId?: number;
    tasks: Task[] = [];
    // estas son las relaciones completas y no las uniones
    client?:User;
    worker?:User;
    
    // status: ProjectStatus; // PENDING, IN_PROGRESS, COMPLETED
  
    // constructor(id, name, description, budget, clientId) { ... }
  
    // assignWorker(workerId: UUID): void;
    // addTask(task: Task): void;
    // markAsCompleted(): void;
  }
  