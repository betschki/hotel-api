import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/categories.entity';
import { Hotel } from 'src/hotels/hotels.entity';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dtos/create-room.dto';
import { Room } from './rooms.entity';

@Injectable()
export class RoomsService {
  constructor(@InjectRepository(Room) private repo: Repository<Room>) {}

  find() {
    return this.repo.find();
  }

  findMany(params: Partial<Room>) {
    return this.repo.find(params);
  }

  async findOne(id: number) {
    const room = await this.repo.findOne(id);
    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found.`);
    }

    return room;
  }

  async create(room: CreateRoomDto, hotel: Hotel, category: Category) {
    room.hotel = hotel;
    room.roomCategory = category;
    const newRoom = await this.repo.create(room);
    console.log(room, hotel, category, newRoom);

    return this.repo.save(newRoom);
  }

  async update(id: number, attributes: Partial<Room>) {
    const room = await this.findOne(id);
    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found.`);
    }

    Object.assign(room, attributes);

    return this.repo.save(room);
  }

  async remove(id: number) {
    const room = await this.findOne(id);
    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }

    return this.repo.remove(room);
  }
}
