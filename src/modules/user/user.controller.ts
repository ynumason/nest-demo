import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { PaginationDto } from './user.dto';

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

  // 分页获取用户
  @Get('paginate')
  async findWithPagination(@Query() paginationDto: PaginationDto) {
    return this.userService.findUsersWithPagination(paginationDto);
  }

  // 带搜索条件的分页获取用户
  @Get('search')
  async findWithSearchAndPagination(
    @Query() paginationDto: PaginationDto,
    @Query('search') search: string,
  ) {
    return this.userService.findUsersWithSearchAndPagination(
      paginationDto,
      search,
    );
  }

  // 测试参数获取 Param: Restful Api参数 Query: url传参 Body:Put传参
  // 测试Body参数获取
  @Post('unique')
  async findUniqueData(@Body() reqBody: any) {
    console.log(reqBody);
    return reqBody;
  }

  // 测试Param参数获取3000/user/testparams/data/34/77
  @Get('/testparams/data/:id/:subid')
  getData(@Param() params: any): string {
    console.log(params);
    return params;
  }

  // 测试Param参数获取 只获取subid并使用ParsePipe约束类型
  // /user/pornhub/data/pornchanel/234555
  @Get('/pornhub/data/:id/:subid')
  async pornhubData(@Param('subid', ParseIntPipe) subid: number) {
    return subid;
  }

  // 测试Query参数获取
  // 3000/user/testquery?id=22&name=北京
  @Get('testquery')
  async getQUery(@Query() query: any) {
    console.log(query);
    return query;
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
