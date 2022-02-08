import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/common/interfaces/address.interface';
import { RoomsService } from 'src/rooms/rooms.service';
import { Repository } from 'typeorm';
import { Hotel } from './hotels.entity';

interface HotelWithRooms extends Hotel {
  rooms: number;
}

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel) private repo: Repository<Hotel>,
    private roomsService: RoomsService,
  ) {}

  find() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const hotel: any = await this.repo.findOne(id);
    hotel.rooms = (await this.roomsService.findMany({ hotel: id })).length;

    return hotel;
  }

  create(name: string, stars: number, address: Address) {
    const newHotel = this.repo.create({ name, stars, address });

    return this.repo.save(newHotel);
  }

  async update(id: number, attributes: Partial<Hotel>) {
    const hotel = await this.findOne(id);
    if (!hotel) {
      throw new NotFoundException(`Hotel with id ${id} not found`);
    }

    Object.assign(hotel, attributes);

    return this.repo.save(hotel);
  }

  async remove(id: number) {
    const hotel = await this.findOne(id);
    if (!hotel) {
      throw new NotFoundException(`Hotel with id ${id} not found`);
    }

    return this.repo.remove(hotel);
  }
}
