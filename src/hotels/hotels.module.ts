import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelsController } from './hotels.controller';
import { Hotel } from './hotels.entity';
import { HotelsService } from './hotels.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel])],
  controllers: [HotelsController],
  providers: [HotelsService],
})
export class HotelsModule {}
