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

  // 通过id查找用户
  async findOneById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id, isDel: 0 } });
  }

  // 更新用户信息
  async updateUser(id: number, userName: string, password: string): Promise<void> {
    await this.userRepository.update(id, { username: userName, password, isDel: 0 });
  }

  // 删除用户
  async deleteUser(id: number): Promise<void> {
    await this.userRepository.update(id, { isDel: 1 });
  }
}
