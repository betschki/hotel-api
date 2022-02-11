import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsModule } from 'src/reservations/reservations.module';
import { GuestsController } from './guests.controller';
import { Guest } from './guests.entity';
import { GuestsService } from './guests.service';

@Module({
  imports: [ReservationsModule, TypeOrmModule.forFeature([Guest])],
  controllers: [GuestsController],
  providers: [GuestsService],
})
export class GuestsModule {}
