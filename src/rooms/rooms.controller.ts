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
import { Hotel } from 'src/hotels/hotels.entity';
import { HotelsService } from 'src/hotels/hotels.service';
import { CreateRoomDto } from './dtos/create-room.dto';
import { UpdateRoomDto } from './dtos/update-room.dto';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(
    private roomsService: RoomsService,
    private hotelsService: HotelsService,
    private categoriesService: CategoriesService,
  ) {}

  @Get()
  getRooms() {
    return this.roomsService.find();
  }

  @Get('/:id')
  getRoom(@Param('id') id: string) {
    return this.roomsService.findOne(parseInt(id));
  }

  @Post()
  async createRoom(@Body() body: any) {
    const hotel = await this.hotelsService.findOne(body.hotel);
    const category = await this.categoriesService.findOne(body.roomCategory);
    return await this.roomsService.create(body, hotel, category);
  }

  @Patch('/:id')
  updateRoom(@Param('id') id: string, @Body() body: UpdateRoomDto) {
    return this.roomsService.update(parseInt(id), body);
  }

  @Delete('/:id')
  deleteRoom(@Param('id') id: string) {
    return this.roomsService.remove(parseInt(id));
  }
}
