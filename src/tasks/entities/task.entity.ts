import { Project } from "src/projects/entities/project.entity";
import { User } from "src/users/entities/user.entity";

export class Task {
    id: number;
    title: string;
    description: string;
    projectId: number;
    assignedToId?: number;
    project?: Project;
    assignedTo?: User;
    // status: TaskStatus; // TODO, IN_PROGRESS, DONE
    // uploads: Upload[] = [];
  
    // constructor(id, title, description, projectId) { ... }
  
    // assignTo(workerId: number): void;
    // markAsCompleted(): void;
  }
  