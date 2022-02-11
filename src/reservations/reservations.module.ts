import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from 'src/rooms/rooms.module';
import { ReservationsController } from './reservations.controller';
import { Reservation } from './reservations.entity';
import { ReservationsService } from './reservations.service';

@Module({
  imports: [RoomsModule, TypeOrmModule.forFeature([Reservation])],
  controllers: [ReservationsController],
  providers: [ReservationsService],
  exports: [ReservationsService],
})
export class ReservationsModule {}
