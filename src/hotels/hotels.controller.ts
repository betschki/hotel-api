import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { RoomsService } from 'src/rooms/rooms.service';
import { CreateHotelDto } from './dtos/create-hotel.dto';
import { UpdateHotelDto } from './dtos/update-hotel.dto';
import { Hotel } from './hotels.entity';
import { HotelsService } from './hotels.service';

@Controller('/hotels')
export class HotelsController {
  constructor(
    private hotelService: HotelsService,
    private roomsService: RoomsService,
    private categoriesService: CategoriesService,
  ) {}

  @Get()
  getHotels() {
    return this.hotelService.find();
  }

  @Get('/:id')
  getHotel(@Param('id') id: string) {
    return this.hotelService.findOne(parseInt(id));
  }

  @Get('/:id/rooms')
  async getHotelRooms(@Param('id') id: string) {
    const hotel: Hotel = await this.hotelService.findOne(parseInt(id));
    return this.roomsService.findMany({ hotel: hotel });
  }

  @Get('/:id/categories')
  async getHotelCategories(@Param('id') id: string) {
    const hotel: Hotel = await this.hotelService.findOne(parseInt(id));
    return this.categoriesService.findMany({ hotel: hotel });
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
