import { Address } from 'src/common/interfaces/address.interface';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
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
