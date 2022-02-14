import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Category } from 'src/categories/categories.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { Room } from 'src/rooms/rooms.entity';
import { RoomsService } from 'src/rooms/rooms.service';
import { CreateReservationDto } from './dtos/create-reservation.dto';
import { UpdateReservationDto } from './dtos/update-reservation.dto';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {
  constructor(
    private reservationsService: ReservationsService,
    private categoriesService: CategoriesService,
    private roomsService: RoomsService,
  ) {}

  @Get()
  getReservations() {
    return this.reservationsService.find();
  }

  @Get('/:id')
  getReservation(@Param('id') id: string) {
    return this.reservationsService.findOne(parseInt(id));
  }

  @Get('/:id/rooms')
  getReservationRooms(@Param('id') id: string) {
    return this.reservationsService.findRooms(parseInt(id));
  }

  @Post()
  async createReservation(@Body() body: any) {
    const categories: Category[] = [];
    const rooms: Room[] = [];

    for (let i = 0; i < body.roomCategories.length; i++) {
      categories.push(
        await this.categoriesService.findOne(body.roomCategories[i]),
      );
    }

    for (let i = 0; i < body.rooms.length; i++) {
      rooms.push(await this.roomsService.findOne(body.rooms[i]));
    }

    body.roomCategories = categories;
    body.rooms = rooms;

    return this.reservationsService.create(body);
  }

  @Patch('/:id')
  updateReservation(
    @Param('id') id: string,
    @Body() body: UpdateReservationDto,
  ) {
    return this.reservationsService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeReservation(@Param('id') id: string) {
    return this.reservationsService.remove(parseInt(id));
  }
}
