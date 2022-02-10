import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hotel: number;

  @Column()
  roomNumber: string;

  @Column()
  roomCategory: number;

  @Column()
  size: number;

  @Column()
  smoking: boolean;

  @Column()
  pets: boolean;

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
