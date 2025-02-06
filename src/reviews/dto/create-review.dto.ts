import { IsNumber, IsString, Min, Max } from 'class-validator';

export class CreateReviewDto {
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  comment: string;

  @IsNumber()
  reviewerId: number;

  @IsNumber()
  reviewedUserId: number;
}
