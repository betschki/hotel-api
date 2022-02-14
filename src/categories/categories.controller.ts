import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { CategoriesService } from './categories.service';
import { HotelsService } from 'src/hotels/hotels.service';
import { ReservationsService } from 'src/reservations/reservations.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
    private hotelsService: HotelsService,
  ) {}

  @Get()
  getRoomCategories() {
    return this.categoriesService.find();
  }

  @Get('/:id')
  getRoomCategory(@Param('id') id: string) {
    return this.categoriesService.findOne(parseInt(id));
  }

  @Post()
  async createRoomCategory(@Body() body: any) {
    const hotel = await this.hotelsService.findOne(body.hotel);
    return this.categoriesService.create(body, hotel);
  }

  @Patch('/:id')
  updateRoomCategory(@Param('id') id: string, @Body() body: UpdateCategoryDto) {
    return this.categoriesService.update(parseInt(id), body);
  }

  @Delete('/:id')
  deleteRoomCategory(@Param('id') id: string) {
    return this.categoriesService.remove(parseInt(id));
  }
}
