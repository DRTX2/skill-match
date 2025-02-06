import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';
import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
  
  @IsInt()
  @IsPositive()
  budget: number;
  
  @IsInt()
  @IsPositive()
  clientId: number;
  
  @IsInt()
  @IsOptional()
  @IsPositive()
  workerId?: number;
}
