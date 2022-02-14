import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from 'src/categories/categories.module';
import { RoomsModule } from 'src/rooms/rooms.module';
import { ReservationsController } from './reservations.controller';
import { Reservation } from './reservations.entity';
import { ReservationsService } from './reservations.service';

@Module({
  imports: [
    forwardRef(() => CategoriesModule),
    RoomsModule,
    TypeOrmModule.forFeature([Reservation]),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService],
  exports: [ReservationsService],
})
export class ReservationsModule {}
