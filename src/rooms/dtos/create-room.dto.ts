import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Hotel } from 'src/hotels/hotels.entity';

export class CreateRoomDto {
  @IsNumber()
  hotel: Hotel;

  @IsString()
  roomNumber: string;

  @IsNumber()
  roomCategory: number;

  @IsNumber()
  size: number;

  @IsBoolean()
  smoking: boolean;

  @IsBoolean()
  pets: boolean;
}
