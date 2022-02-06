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

  @Column()
  address: string;

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
