import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/rooms/rooms.entity';
import { RoomsService } from 'src/rooms/rooms.service';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dtos/create-reservation.dto';
import { Reservation } from './reservations.entity';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation) private repo: Repository<Reservation>,
    private roomsService: RoomsService,
  ) {}

  find() {
    return this.repo.find();
  }

  findMany(params: Partial<Reservation>) {
    return this.repo.find(params);
  }

  async findRooms(id: number) {
    const reservation = await this.repo.findOne(id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }

    const { rooms } = reservation;

    const roomArray: Room[] = [];

    for (let i = 0; i < rooms.length; i++) {
      roomArray.push(await this.roomsService.findOne(rooms[i].id));
    }

    return roomArray;
  }

  async findOne(id: number) {
    const reservation = await this.repo.findOne(id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }

    return reservation;
  }

  create(reservation: CreateReservationDto) {
    const newReservation = this.repo.create(reservation);
    return this.repo.save(newReservation);
  }

  async update(id: number, attributes: Partial<Reservation>) {
    const reservation = await this.findOne(id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }

    Object.assign(reservation, attributes);

    return this.repo.save(reservation);
  }

  async remove(id: number) {
    const reservation = await this.findOne(id);
    if (!reservation) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }

    return this.repo.remove(reservation);
  }
}
