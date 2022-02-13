import { IsNumber, IsString, IsOptional, IsArray } from 'class-validator';
import { Address } from 'src/common/interfaces/address.interface';
import { Room } from 'src/rooms/rooms.entity';

export class UpdateHotelDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  stars: number;

  @IsString()
  @IsOptional()
  address: Address;

  @IsArray()
  @IsOptional()
  rooms: Room[];
}
