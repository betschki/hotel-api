import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateHotelDto } from './dtos/create-hotel.dto';
import { UpdateHotelDto } from './dtos/update-hotel.dto';
import { HotelsService } from './hotels.service';

@Controller('/hotels')
export class HotelsController {
  constructor(private hotelService: HotelsService) {}

  @Get()
  getHotels() {
    return this.hotelService.find();
  }

  @Get('/:id')
  getHotel(@Param('id') id: string) {
    return this.hotelService.findOne(parseInt(id));
  }

  @Post()
  async createHotel(@Body() body: CreateHotelDto) {
    const hotel = await this.hotelService.create(
      body.name,
      body.stars,
      body.address,
    );
    return hotel;
  }

  @Patch('/:id')
  updateHotel(@Param('id') id: string, @Body() body: UpdateHotelDto) {
    return this.hotelService.update(parseInt(id), body);
  }

  @Delete('/:id')
  deleteHotel(@Param('id') id: string) {
    return this.hotelService.remove(parseInt(id));
  }
}
