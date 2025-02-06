import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.databaseService.user.create({
      data: createUserDto,
    });
  }

  async findAll(role?: UserRole) {
    if (role) {
      return await this.databaseService.user.findMany({
        where: {
          role,
        },
      });
    }
    return await this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.databaseService.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.databaseService.user.update({
        where: {
          id,
        },
        data: updateUserDto,
      });
    } catch (error) {
      throw new NotFoundException(`User with id: ${id} not found to update`);
    }
  }

  async remove(id: number) {
    try {
      return await this.databaseService.user.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new NotFoundException(`User with id: ${id} not found to update`);
    }
  }
}
