import {
    Body,
    Controller,
    Get,
    Post,
    Patch,
    Param,
    Delete,
    Query,
    ParseIntPipe,
    BadRequestException,
  } from '@nestjs/common';
  import { ProfilesService } from './profiles.service';
  import { CreateProfileDto } from './dto/create-profile.dto';
  import { UpdateProfileDto } from './dto/update-profile.dto';
  
  @Controller('profiles')
  export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {}
  
    @Post()
    async create(@Body() createProfileDto: CreateProfileDto) {
      return await this.profilesService.create(createProfileDto);
    }
  
    @Get()
    async findAll(@Query('skills') skills?: string, @Query('location') location?: string) {
      if (!skills?.trim() && !location?.trim()) {
        throw new BadRequestException('Debes proporcionar al menos un criterio de búsqueda');
      }
      return await this.profilesService.searchProfiles({ skills, location });
    }
  
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
      return await this.profilesService.findOne(id);
    }
  
    @Get('user/:userId')
    async findByUserId(@Param('userId', ParseIntPipe) userId: number) {
      return await this.profilesService.findByUserId(userId);
    }
  
    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateProfileDto: UpdateProfileDto) {
      return await this.profilesService.update(id, updateProfileDto);
    }
  
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
      return await this.profilesService.remove(id);
    }
  }
  