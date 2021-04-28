import { Controller, Get } from '@nestjs/common';
import { getAllProductOutput } from './dtos/get-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getallProduct(): Promise<getAllProductOutput[]> {
    return await this.productService.findAll();
  }
}
