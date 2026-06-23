import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return {
      message: 'User created',
      data: createUserDto,
    };
  }

  findAll(page?: number, limit?: number) {
    return {
      message: 'All users',
      page,
      limit,
    };
  }

  findOne(id: string) {
    return {
      message: `User ${id}`,
    };
  }

  findByEmail(email: string) {
    return {
      message: `User with email ${email}`,
    };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return {
      message: `User ${id} updated`,
      data: updateUserDto,
    };
  }

  updateStatus(id: string) {
    return {
      message: `User ${id} status updated`,
    };
  }

  remove(id: string) {
    return {
      message: `User ${id} deleted`,
    };
  }

  getProfile(id: string) {
    return {
      message: `Profile of user ${id}`,
    };
  }
}
