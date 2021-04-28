import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  createProductInput,
  createProductOutput,
} from './dtos/create-product.dto';
import { getAllProductOutput } from './dtos/get-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getallProduct(): Promise<getAllProductOutput[]> {
    return await this.productService.findAll();
  }

  @Post()
  async createProduct(
    @Body() createProductInput: createProductInput,
  ): Promise<createProductOutput> {
    return await this.productService.createProduct(createProductInput);
  }
}
