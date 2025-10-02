import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { GoodsModule } from './modules/goods/goods.module';
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
    UserModule,
    GoodsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }