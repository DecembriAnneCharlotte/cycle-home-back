import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Assurez-vous de définir la clé secrète
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [JwtStrategy, UserService],
  exports: [JwtModule],
})
export class AuthModule {}
