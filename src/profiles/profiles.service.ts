import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProfilesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProfileDto: CreateProfileDto) {
    try {
      return await this.databaseService.profile.create({
        data: {
          bio: createProfileDto.bio,
          location: createProfileDto.location,
          website: createProfileDto.website,
          skills: createProfileDto.skills,
          picture: createProfileDto.picture,
          user: createProfileDto.userId
            ? { connect: { id: createProfileDto.userId } }
            : undefined,
        },
      });
    } catch (error) {
      throw new BadRequestException('Error al crear el perfil.');
    }
  }

  // profile.id
  async findOne(id: number) {
    const profile = await this.databaseService.profile.findUnique({
      where: { id },
    });

    if (!profile) {
      throw new NotFoundException(`Perfil con id ${id} no encontrado.`);
    }
    return profile;
  }

  //user.id
  async findByUserId(userId: number) {
    const profile = await this.databaseService.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      throw new NotFoundException(`Perfil no encontrado para el usuario con id ${userId}.`);
    }
    return profile;
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    try {
      return await this.databaseService.profile.update({
        where: { id },
        data: updateProfileDto,
      });
    } catch (error) {
      throw new NotFoundException(`No se pudo actualizar el perfil con id ${id}.`);
    }
  }

  async remove(id: number) {
    try {
      return await this.databaseService.profile.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`No se pudo eliminar el perfil con id ${id}.`);
    }
  }

  async searchProfiles(query: { skills?: string; location?: string }) {
    return await this.databaseService.profile.findMany({
      where: {
        skills: query.skills ? { contains: query.skills, mode: 'insensitive' } : undefined,
        location: query.location ? { contains: query.location, mode: 'insensitive' } : undefined,
      },
    });
  }
}
