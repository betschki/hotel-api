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
export class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  surname: string;

  @Column()
  gender: string;

  @Column('simple-array')
  paymentMethod: string;

  @Column('simple-array')
  billingAddress: Address;

  @Column()
  notes: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Guest with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Guest with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Guest with id', this.id);
  }
}
