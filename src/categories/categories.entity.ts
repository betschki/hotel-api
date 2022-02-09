import { Hotel } from 'src/hotels/hotels.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hotel: number;

  @Column()
  name: string;

  @Column()
  balcony: boolean;

  @Column()
  bathtub: boolean;

  @Column()
  shower: boolean;

  @Column()
  view: string;

  @Column()
  adults: number;

  @Column()
  children: number;

  @Column()
  price: number;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Room Category with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Room Category with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Room Category with id', this.id);
  }
}
