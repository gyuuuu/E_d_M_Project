import { IsDateString, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ type: 'varchar' })
  @IsString()
  product_name: string;

  @Column({ type: Date })
  @IsDateString()
  expired_date: Date;
}
