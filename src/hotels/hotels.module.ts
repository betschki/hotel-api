import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from 'src/rooms/rooms.module';
import { RoomsService } from 'src/rooms/rooms.service';
import { HotelsController } from './hotels.controller';
import { Hotel } from './hotels.entity';
import { HotelsService } from './hotels.service';

@Module({
  imports: [RoomsModule, TypeOrmModule.forFeature([Hotel])],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
