import { PartialType, PickType } from '@nestjs/mapped-types';
import { product } from '../entites/product.entity';

export class updateProductInput extends PartialType(
  PickType(product, ['product_id', 'expired_data']),
) {}

export class updateProductOutput extends PickType(product, [
  'product_id',
  'expired_data',
]) {}