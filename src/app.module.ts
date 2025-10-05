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
      username: 'nestuser',
      password: 'nestpass',
      database: 'shoppy_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      dropSchema: false,
      // 自动创建数据库（如果不存在）
      autoLoadEntities: true,
      // 在开发环境中，如果数据库不可用则应用仍然可以启动
      retryAttempts: 3,
      retryDelay: 3000,
      // 使用 mysql2 驱动
      driver: require('mysql2'),
      // 连接池配置优化 - 根据最佳实践调整
      extra: {
        // 连接池最大连接数
        // 建议设置为: CPU核心数 * 2 + 有效磁盘数
        // 对于一般应用，10-20 是合理的范围
        connectionLimit: 100,

        // 最大空闲连接数
        // 通常设置为 connectionLimit 的 50-75%
        // 保留一些空闲连接以快速响应新请求
        maxIdle: 8,

        // 空闲连接超时时间(毫秒)
        // 空闲连接超过此时间将被释放
        idleTimeoutMillis: 30000,

        // 连接超时时间(毫秒)
        // 建立新连接的超时时间
        connectTimeout: 30000,

        // 获取连接超时时间(毫秒)
        // 从连接池获取连接的超时时间
        acquireTimeout: 30000,

        // 连接超时后重试次数
        // 连接失败时的重试机制
        retryDelay: 500,

        // 是否启用连接验证
        // 获取连接时验证连接有效性
        validateConnection: true,
      },
      // 启用连接池统计信息，便于监控
      logging: ['error'], // 只记录错误日志以减少日志量
    }),
    UserModule,
    GoodsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
