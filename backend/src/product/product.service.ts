import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  createProductInput,
  createProductOutput,
} from './dtos/create-product.dto';
import { getAllProductOutput } from './dtos/get-product.dto';
import {
  updateProductInput,
  updateProductOutput,
} from './dtos/update-product.dto';
import { product } from './entites/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(product)
    private readonly productRepository: Repository<product>,
  ) {}

  async findAll(): Promise<getAllProductOutput[]> {
    return await this.productRepository.find({
      order: { expired_data: 'DESC' },
    });
  }

  async createProduct({
    product_name,
    expired_data,
  }: createProductInput): Promise<createProductOutput> {
    const product = await this.productRepository.create({
      product_name,
      expired_data,
    });
    const insertRes = await this.productRepository.insert(product);
    return <createProductOutput>insertRes.identifiers[0];
  }

  async updateProduct({
    product_id,
    expired_data,
  }: updateProductInput): Promise<updateProductOutput> {
    const product = await this.productRepository.findOne({ product_id });
    product.expired_data = expired_data;
    return await this.productRepository.save(product);
  }
}
