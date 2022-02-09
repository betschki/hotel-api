import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRoomDto } from './dtos/create-room.dto';
import { UpdateRoomDto } from './dtos/update-room.dto';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Get()
  getRooms() {
    return this.roomsService.find();
  }

  @Get('/:id')
  getRoom(@Param('id') id: string) {
    return this.roomsService.findOne(parseInt(id));
  }

  @Post()
  async createRoom(@Body() body: CreateRoomDto) {
    const room = await this.roomsService.create(body);
    return room;
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
