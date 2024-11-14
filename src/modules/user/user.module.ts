// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Facultatif, uniquement si d'autres modules en ont besoin
})
export class UserModule {}
