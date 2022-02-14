import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from 'src/categories/categories.module';
import { RoomsModule } from 'src/rooms/rooms.module';
import { HotelsController } from './hotels.controller';
import { Hotel } from './hotels.entity';
import { HotelsService } from './hotels.service';

@Module({
  imports: [
    forwardRef(() => RoomsModule),
    forwardRef(() => CategoriesModule),
    CategoriesModule,
    TypeOrmModule.forFeature([Hotel]),
  ],
  controllers: [HotelsController],
  providers: [HotelsService],
  exports: [HotelsService],
})
export class HotelsModule {}
