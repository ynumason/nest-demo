import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 创建用户
  @Post()
  async create(
    @Body() userData: { username: string; password: string },
  ): Promise<User> {
    return this.userService.createUser(userData.username, userData.password);
  }

  // 获取所有用户
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  // 获取单个用户
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User | null> {
    return this.userService.findOneById(id);
  }

  // 更新用户
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() userData: { username: string; password: string },
  ): Promise<void> {
    return this.userService.updateUser(
      id,
      userData.username,
      userData.password,
    );
  }

  // 删除用户
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
