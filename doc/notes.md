# 项目开发笔记

## nestjs使用
### 1.生成业务文件

### 2.初始化项目文件
- 删除app.service.ts app.controller.ts 
- 保留 app.module.ts文件即可

### 3.业务文件的生成
```typescript
nest g mo modules/user 
nest g co modules/user --no-spec 在modules模块下 生成不带测试文件的模块
nest g s modules/user --no-spec
```

## typeorm使用

### 1.安装
```typescript
pnpm i --save @nestjs/typeorm typeorm mysql
```

### 2.配置数据库
```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'shoppy_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
```







## 技术栈

## 环境配置

## 核心功能实现

## 代码示例

```typescript
// 示例代码3
```

## 遇到的问题及解决方案

### 问题1

**问题描述**：

**解决方案**：

```typescript
// 解决方案代码
```

## 开发规范

## 项目结构

## 其他注意事项
