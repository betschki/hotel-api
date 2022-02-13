import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/common/interfaces/address.interface';
import { Repository } from 'typeorm';
import { Hotel } from './hotels.entity';

@Injectable()
export class HotelsService {
  constructor(@InjectRepository(Hotel) private repo: Repository<Hotel>) {}

  find() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const hotel: any = await this.repo.findOne(id);
    if (!hotel) {
      throw new NotFoundException(`Hotel with id ${id} not found`);
    }

    return hotel as Hotel;
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

    this.repo.remove(hotel);

    return `Hotel with id ${id} removed successfully`;
  }
}
