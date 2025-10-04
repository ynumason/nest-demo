import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 创建用户
  @Post()
  async create(@Body() userData: { username: string; password: string }) {
    return this.userService.createUser(userData.username, userData.password);
  }
}
