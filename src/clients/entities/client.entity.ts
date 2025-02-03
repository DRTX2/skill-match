import { Project } from "src/projects/entities/project.entity";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";

class Client extends User {
    companyName?: string;
    postedJobs: Job[] = [];
    postedProjects: Project[] = [];
    reviewsReceived: Review[] = [];
  
    // constructor(id, name, email, password, companyName) { ... }
  
    // postJob(job: Job): void;
    // postProject(project: Project): void;
    // reviewWorker(workerId: UUID, review: Review): void;
  }