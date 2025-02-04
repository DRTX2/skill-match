import {Job} from "src/jobs/entities/job.entity";
import { Project } from "src/projects/entities/project.entity";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";

class Worker extends User {
    skills: string[];
    experience: string;
    appliedJobs: Job[] = [];
    activeProjects: Project[] = [];
    earnings: number = 0;
    reviewsReceived: Review[] = [];
  
    // constructor(id, name, email, password, skills, experience) { ... }
  
    // applyForJob(jobId: UUID): void;
    // acceptProject(projectId: UUID): void;
    // submitWork(taskId: UUID, upload: Upload): void;
    // withdrawEarnings(amount: number): boolean;
  }
  