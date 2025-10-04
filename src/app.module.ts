import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { GoodsModule } from './modules/goods/goods.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/user.entity';

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
      // 自动创建数据库（如果不存在）
      autoLoadEntities: true,
      // 在开发环境中，如果数据库不可用则应用仍然可以启动
      retryAttempts: 3,
      retryDelay: 3000,
    }),
    User,
    UserModule,
    GoodsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }