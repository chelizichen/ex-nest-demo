import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { FundModule } from 'src/fund/fund.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule, // TypeORM 模块
    FundModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
