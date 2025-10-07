import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { User } from './user.entity';
import { PaginationDto, PaginationResult } from './user.dto';

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

  // 分页查询用户
  async findUsersWithPagination(
    paginationDto: PaginationDto,
  ): Promise<PaginationResult<User>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [data, total] = await this.userRepository.findAndCount({
      where: { isDel: 0 },
      skip,
      take: limit,
      order: {
        id: 'ASC',
      },
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  // 带搜索条件的分页查询
  async findUsersWithSearchAndPagination(
    paginationDto: PaginationDto,
    search: string,
  ): Promise<PaginationResult<User>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;

    const [data, total] = await this.userRepository.findAndCount({
      where: [
        { username: Like(`%${search}%`), isDel: 0 },
        { password: Like(`%${search}%`), isDel: 0 },
      ],
      skip,
      take: limit,
      order: {
        id: 'ASC',
      },
    });

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
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