import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Hotel } from 'src/hotels/hotels.entity';

export class UpdateRoomDto {
  @IsNumber()
  @IsOptional()
  hotel: Hotel;

  @IsString()
  @IsOptional()
  roomNumber: string;

  @IsNumber()
  @IsOptional()
  roomCategory: number;

  @IsNumber()
  @IsOptional()
  size: number;

  @IsBoolean()
  @IsOptional()
  smoking: boolean;

  @IsBoolean()
  @IsOptional()
  pets: boolean;
}
