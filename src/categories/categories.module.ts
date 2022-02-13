import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from 'src/rooms/rooms.module';
import { CategoriesController } from './categories.controller';
import { Category } from './categories.entity';
import { CategoriesService } from './categories.service';

@Module({
  imports: [
    forwardRef(() => RoomsModule),
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
