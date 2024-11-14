// src/auth/auth.controller.ts

import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Authentifie l\'utilisateur et retourne un token JWT' })
  @ApiResponse({ status: 200, description: 'Utilisateur authentifié avec succès.' })
  @ApiResponse({ status: 401, description: 'Identifiants invalides.' })
  async login(@Request() req) {
    // L'utilisateur est injecté dans req.user par le LocalAuthGuard
    return this.authService.login(req.user);
  }
}
