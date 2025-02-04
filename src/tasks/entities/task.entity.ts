export class Task {
    id: number;
    title: string;
    description: string;
    projectId: number;
    assignedTo?: number;
    // status: TaskStatus; // TODO, IN_PROGRESS, DONE
    // uploads: Upload[] = [];
  
    // constructor(id, title, description, projectId) { ... }
  
    // assignTo(workerId: number): void;
    // markAsCompleted(): void;
  }
  