import { Hotel } from 'src/hotels/hotels.entity';
import { Reservation } from 'src/reservations/reservations.entity';
import { Room } from 'src/rooms/rooms.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Hotel, (hotel) => hotel.categories)
  hotel: Hotel;

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

  @OneToMany(() => Room, (room) => room.roomCategory)
  rooms: Room[];

  @ManyToMany(() => Reservation)
  @JoinTable()
  reservations: Reservation[];

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
