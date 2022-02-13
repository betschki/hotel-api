import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Address } from 'src/common/interfaces/address.interface';
import { Room } from 'src/rooms/rooms.entity';

export class CreateHotelDto {
  @IsString()
  name: string;

  @IsNumber()
  stars: number;

  @IsObject()
  address: Address;

  @IsArray()
  @IsOptional()
  rooms: Room[];
}
