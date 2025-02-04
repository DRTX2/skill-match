import {Job} from "src/jobs/entities/job.entity";
import { Project } from "src/projects/entities/project.entity";
import { User } from "src/users/entities/user.entity";

export class Freelancer extends User{
    specilities: string[];
    experience: number;
    cvUrl:string;
    portfolio:Project[];
    jobs_applied:Job[];
}
