import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guest: number;

  @Column()
  hotel: number;

  @Column('simple-array')
  roomCategories: number[];

  @Column('simple-array')
  rooms: number[];

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
