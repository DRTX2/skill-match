import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createReviewDto: CreateReviewDto) {
    try {
      return await this.databaseService.review.create({
        data: createReviewDto,
      });
    } catch (error) {
      throw new BadRequestException(`Error al crear la reseña: ${error.message}`);
    }
  }

  async findAllByUser(userId: number) {
    const reviews = await this.databaseService.review.findMany({
      where: {
        reviewerId: userId,
      },
      include: {
        reviewedUser: true, 
      },
    });

    if (!reviews || reviews.length === 0) {
      throw new NotFoundException(`No se encontraron reseñas para el usuario con id ${userId}`);
    }

    return reviews;
  }

  async findOne(id: number) {
    const review = await this.databaseService.review.findUnique({
      where: {
        id,
      },
      include: {
        reviewer: true, 
        reviewedUser: true, 
      },
    });

    if (!review) {
      throw new NotFoundException(`Reseña con id ${id} no encontrada`);
    }

    return review;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    await this.findOne(id); 

    try {
      return await this.databaseService.review.update({
        where: {
          id,
        },
        data: updateReviewDto,
      });
    } catch (error) {
      throw new NotFoundException(`Reseña con id ${id} no encontrada para actualizar`);
    }
  }

  async remove(id: number) {
    await this.findOne(id); 

    try {
      return await this.databaseService.review.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Reseña con id ${id} no encontrada para eliminar`);
    }
  }
}
