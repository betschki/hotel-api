import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';
import { ReservationsModule } from './reservations/reservations.module';
import { GuestsModule } from './guests/guests.module';

@Module({
  imports: [HotelsModule, RoomsModule, ReservationsModule, GuestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
