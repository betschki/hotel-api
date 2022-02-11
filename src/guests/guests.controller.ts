import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ReservationsService } from 'src/reservations/reservations.service';
import { CreateGuestDto } from './dtos/create-guest.dto';
import { UpdateGuestDto } from './dtos/update-guest.dto';
import { GuestsService } from './guests.service';

@Controller('guests')
export class GuestsController {
  constructor(
    private guestsService: GuestsService,
    private reservationsService: ReservationsService,
  ) {}

  @Get()
  getGuests() {
    return this.guestsService.find();
  }

  @Get('/:id')
  getGuest(@Param('id') id: string) {
    return this.guestsService.findOne(parseInt(id));
  }

  @Get('/:id/reservations')
  getGuestReservations(@Param('id') id: string) {
    return this.reservationsService.findMany({ guest: parseInt(id) });
  }

  @Post()
  createGuest(@Body() body: CreateGuestDto) {
    return this.guestsService.create(body);
  }

  @Patch('/:id')
  updateGuest(@Param('id') id: string, @Body() body: UpdateGuestDto) {
    return this.guestsService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeGuest(@Param('id') id: string) {
    return this.guestsService.remove(parseInt(id));
  }
}
