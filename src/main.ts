import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用 CORS
  app.enableCors();

  // 设置全局前缀
  // app.setGlobalPrefix('api');

  // 启用生产环境优化
  // app.set('trust proxy', 1); // 如果在代理后面运行 (Express特定设置)

  // 监听端口
  const server = await app.listen(process.env.PORT ?? 3000);
  console.log(`🐳🐳🐳nest serve start on port ${process.env.PORT ?? 3000}`);

  // 添加连接池状态监控（仅用于开发环境）
  if (process.env.NODE_ENV !== 'production') {
    setInterval(() => {
      // 注意：这只是一个示例，实际实现需要访问 TypeORM 连接池
      // 真实的监控需要通过 TypeORM 的连接池 API 实现
      console.log('Server running status check');
      console.log('github无法推送运行 npm run github:fix');
    }, 30000); // 每30秒检查一次
  }
}
bootstrap();
