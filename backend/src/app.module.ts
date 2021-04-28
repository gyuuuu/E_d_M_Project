import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envConfig } from 'config/env.config';
import { ormConfig } from 'config/ormConfig';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(envConfig()),
    TypeOrmModule.forRoot(ormConfig()),
    ProductModule,
  ],
})
export class AppModule {}
