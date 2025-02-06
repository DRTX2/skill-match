import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  projectId: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  assignedToId?: number;
}
