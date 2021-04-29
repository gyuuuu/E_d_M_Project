import { PickType } from '@nestjs/mapped-types';
import { product } from '../entites/product.entity';

export class createProductInput extends PickType(product, [
  'product_name',
  'expired_date',
]) {}

export class createProductOutput extends PickType(product, ['product_id']) {}
