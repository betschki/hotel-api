import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dtos/create-room.dto';
import { Room } from './rooms.entity';

@Injectable()
export class RoomsService {
  constructor(@InjectRepository(Room) private repo: Repository<Room>) {}

  find() {
    return this.repo.find();
  }

  async findOne(id) {
    const room = await this.repo.findOne(id);
    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found.`);
    }

    return room;
  }

  create(room: CreateRoomDto) {
    const newRoom = this.repo.create(room);
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
