import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ type: 'varchar' })
  product_name: string;

  @Column({ type: 'date' })
  expired_data: string;
}
