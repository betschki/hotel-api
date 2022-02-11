import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGuestDto } from './dtos/create-guest.dto';
import { UpdateGuestDto } from './dtos/update-guest.dto';
import { Guest } from './guests.entity';

@Injectable()
export class GuestsService {
  constructor(@InjectRepository(Guest) private repo: Repository<Guest>) {}

  find() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const guest = await this.repo.findOne(id);
    if (!guest) {
      throw new NotFoundException(`Guest with id ${id} not found`);
    }

    return guest;
  }

  create(guest: CreateGuestDto) {
    const newGuest = this.repo.create(guest);
    return this.repo.save(newGuest);
  }

  async update(id: number, attributes: UpdateGuestDto) {
    const guest = await this.repo.findOne(id);
    if (!guest) {
      throw new NotFoundException(`Guest with id ${id} not found`);
    }

    Object.assign(guest, attributes);

    return this.repo.save(guest);
  }

  async remove(id: number) {
    const guest = await this.findOne(id);
    if (!guest) {
      throw new NotFoundException(`Guest with id ${id} not found`);
    }

    return this.repo.remove(guest);
  }
}
