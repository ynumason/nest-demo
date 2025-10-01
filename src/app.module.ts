import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { GoodsModule } from './modules/goods/goods.module';

@Module({
  imports: [UserModule, GoodsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
