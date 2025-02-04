import { Task } from "src/tasks/entities/task.entity";

export class Project {
    id: number;
    name: string;
    description: string;
    budget: number;
    clientId: number;
    workerId?: number;
    tasks: Task[] = [];
    // status: ProjectStatus; // PENDING, IN_PROGRESS, COMPLETED
  
    // constructor(id, name, description, budget, clientId) { ... }
  
    // assignWorker(workerId: UUID): void;
    // addTask(task: Task): void;
    // markAsCompleted(): void;
  }
  