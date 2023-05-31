import { Module } from '@nestjs/common';
import { TypeOrmModule as OrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    OrmModule.forRootAsync({
      useFactory: async (configService) => ({
        type: 'mysql', // 替换为你要使用的数据库类型
        host: configService.get('DB_HOST'), // 数据库主机
        port: configService.get('DB_PORT'), // 数据库端口
        username: configService.get('DB_USERNAME'), // 数据库用户名
        password: configService.get('DB_PASSWORD'), // 数据库密码
        database: configService.get('DB_NAME'), // 数据库名称
        entities: [__dirname + '/**/*.entity{.ts,.js}'], // TypeORM 实体的文件路径
        synchronize: true, // 每次应用程序启动时自动同步数据库结构（仅用于开发环境）
      }),
    }),
  ],
})
export class TypeOrmModule {}
