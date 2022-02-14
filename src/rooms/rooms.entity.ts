import { Category } from 'src/categories/categories.entity';
import { Hotel } from 'src/hotels/hotels.entity';
import { Reservation } from 'src/reservations/reservations.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  hotel: Hotel;

  @Column()
  roomNumber: string;

  @ManyToOne(() => Category, (category) => category.rooms)
  roomCategory: Category;

  @Column()
  size: number;

  @Column()
  smoking: boolean;

  @Column()
  pets: boolean;

  @ManyToMany(() => Reservation)
  @JoinTable()
  reservations: Reservation[];

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
