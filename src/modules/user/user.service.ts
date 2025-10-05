import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // 创建用户
  async createUser(userName: string, password: string): Promise<User> {
    const user = this.userRepository.create({ username: userName, password });
    return this.userRepository.save(user);
  }

  // 查找所有用户
  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
