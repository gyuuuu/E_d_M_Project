import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  createProductInput,
  createProductOutput,
} from './dtos/create-product.dto';
import { getAllProductOutput } from './dtos/get-product.dto';
import {
  updateProductInput,
  updateProductOutput,
} from './dtos/update-product.dto';
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
    @Body() createProduct: createProductInput,
  ): Promise<createProductOutput> {
    return await this.productService.createProduct(createProduct);
  }

  @Put(':product_id')
  async updateProduct(
    @Param('product_id') product_id: number,
    @Body() updateProduct: updateProductInput,
  ): Promise<updateProductOutput> {
    updateProduct.product_id = product_id;
    return await this.productService.updateProduct(updateProduct);
  }

  // @Delete()
  // async deleteProduct(): Promise<deleteProductOutput> {
  //   return await this.productService.deleteProduct();
  // }
}
