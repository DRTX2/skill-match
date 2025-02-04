import { Job } from "src/jobs/entities/job.entity";
import { Project } from "src/projects/entities/project.entity";
import { User } from "src/users/entities/user.entity";

export class Freelancer extends User {
    specialities: string[]; // Corrección de "specilities"
    experience: number;
    cvUrl: string;
    portfolio: Project[] = [];
    jobsApplied: Job[] = []; // Cambio de nombre para consistencia
}
