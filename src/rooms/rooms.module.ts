import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from 'src/categories/categories.module';
import { HotelsModule } from 'src/hotels/hotels.module';
import { RoomsController } from './rooms.controller';
import { Room } from './rooms.entity';
import { RoomsService } from './rooms.service';

@Module({
  imports: [
    forwardRef(() => HotelsModule),
    forwardRef(() => CategoriesModule),
    TypeOrmModule.forFeature([Room]),
  ],
  controllers: [RoomsController],
  providers: [RoomsService],
  exports: [RoomsService],
})
export class RoomsModule {}
