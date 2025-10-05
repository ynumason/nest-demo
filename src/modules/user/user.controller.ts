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
}
