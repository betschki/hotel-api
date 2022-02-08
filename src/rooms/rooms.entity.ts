import { Hotel } from 'src/hotels/hotels.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Room {
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
    console.log('Inserted Room with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Room with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Room with id', this.id);
  }
}
