import { Address } from 'src/common/interfaces/address.interface';
import { Room } from 'src/rooms/rooms.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stars: number;

  @Column('simple-json')
  address: Address;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Hotel with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Hotel with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Hotel with id', this.id);
  }
}
