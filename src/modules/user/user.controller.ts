// import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
// import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
// import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { RolesGuard } from '../auth/guards/roles.guard';
// import { Roles } from '../auth/decorators/roles.decorator';

// @ApiTags('users')
// @Controller('users')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Post()
//   @ApiOperation({ summary: 'Créer un nouvel utilisateur' })
//   @ApiResponse({ status: 201, description: 'Utilisateur créé avec succès.' })
//   @ApiResponse({ status: 400, description: 'Données invalides.' })
//   async create(@Body() createUserDto: CreateUserDto) {
//     return this.userService.create(createUserDto);
//   }

//   @Get()
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin', 'super_admin')
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Récupérer tous les utilisateurs' })
//   @ApiResponse({ status: 200, description: 'Liste des utilisateurs récupérée.' })
//   async findAll() {
//     return this.userService.findAll();
//   }

//   @Get(':id')
//   @UseGuards(JwtAuthGuard)
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Récupérer un utilisateur par son ID' })
//   @ApiResponse({ status: 200, description: 'Utilisateur trouvé.' })
//   @ApiResponse({ status: 404, description: 'Utilisateur non trouvé.' })
//   async findOne(@Param('id') id: string) {
//     return this.userService.findOne(+id);
//   }
// }

import { Controller, Post, Body, Get, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'super_admin')
  @ApiBearerAuth()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'super_admin')
  @ApiBearerAuth()
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'super_admin')
  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
