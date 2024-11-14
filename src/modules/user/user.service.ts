import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users = []; // Simule la liste des utilisateurs

  create(createUserDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === parseInt(id));
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  findAll() {
    return this.users;
  }

  remove(id: string) {
    const index = this.users.findIndex((user) => user.id === parseInt(id));
    if (index === -1) throw new NotFoundException('User not found');
    return this.users.splice(index, 1);
  }
}
