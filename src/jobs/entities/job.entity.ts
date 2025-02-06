import { User } from "src/users/entities/user.entity";

export class Job {
    id: number;
    title: string;
    description: string;
    salary: number;
    clientId: number;
    workerId?: number;
    client?: User;
    worker?: User;
    // status: JobStatus; // OPEN, CLOSED, FILLED
  
    // constructor(id, title, description, salary, clientId) { ... }
  
    // assignWorker(workerId: UUID): void;
    // closeJob(): void;
  }
  