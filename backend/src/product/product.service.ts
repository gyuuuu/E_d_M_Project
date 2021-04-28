import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { product } from './entites/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(product)
    private readonly productRepository: Repository<product>,
  ) {}

  async findall() {
    return await this.productRepository.find({
      order: { expired_data: 'DESC' },
    });
  }
}
