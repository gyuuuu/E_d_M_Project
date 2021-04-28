import { IsDate, IsString } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ type: 'varchar' })
  @IsString()
  product_name: string;

  @Column({ type: 'date' })
  @IsDate()
  expired_data: string;
}
