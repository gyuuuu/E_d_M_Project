import { PickType } from '@nestjs/mapped-types';
import { product } from '../entites/product.entity';

export class updateProductInput extends PickType(product, [
  'product_name',
  'expired_date',
]) {}

export class updateProductOutput extends product {}
