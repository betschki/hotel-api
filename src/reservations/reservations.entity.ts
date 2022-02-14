import { IsOptional } from 'class-validator';
import { Category } from 'src/categories/categories.entity';
import { Room } from 'src/rooms/rooms.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guest: number;

  @Column()
  hotel: number;

  @ManyToMany(() => Category)
  @JoinTable()
  roomCategories: Category[];

  @ManyToMany(() => Room)
  @JoinTable()
  @IsOptional()
  rooms: Room[];

  @Column()
  arrival: Date;

  @Column()
  departure: Date;

  @Column()
  price: number;

  @Column()
  adults: number;

  @Column()
  children: number;

  @Column()
  pets: boolean;

  @Column()
  notes: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Reservation with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Reservation with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Reservation with id', this.id);
  }
}
