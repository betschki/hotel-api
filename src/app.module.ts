import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';
import { ReservationsModule } from './reservations/reservations.module';
import { GuestsModule } from './guests/guests.module';
import { Hotel } from './hotels/hotels.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Hotel],
      synchronize: true,
    }),
    HotelsModule,
    RoomsModule,
    ReservationsModule,
    GuestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
