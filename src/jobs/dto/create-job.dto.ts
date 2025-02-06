import { IsString, IsNumber, IsOptional, IsPositive } from "class-validator";

export class CreateJobDto {
@IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  salary: number;

  @IsNumber()
  @IsPositive()
  clientId: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  workerId?: number;
}
