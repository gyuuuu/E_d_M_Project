import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from 'config/env.config';
import { ormConfig } from 'config/ormConfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig()),
    ConfigModule.forRoot(envConfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
