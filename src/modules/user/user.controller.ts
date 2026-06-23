import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 1. Create User
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // 2. Get All Users
  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.userService.findAll(page, limit);
  }

  // 3. Get User By ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  // 4. Search User By Email
  @Get('search/email')
  findByEmail(@Query('email') email: string) {
    return this.userService.findByEmail(email);
  }

  // 5. Get User Profile
  @Get(':id/profile')
  getProfile(@Param('id') id: string) {
    return this.userService.getProfile(id);
  }

  // 6. Full Update User
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  // 7. Partial Update User Status
  @Patch(':id/status')
  updateStatus(@Param('id') id: string) {
    return this.userService.updateStatus(id);
  }

  // 8. Delete User
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
