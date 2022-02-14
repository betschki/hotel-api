import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Hotel } from 'src/hotels/hotels.entity';
import { Room } from 'src/rooms/rooms.entity';

export class CreateCategoryDto {
  @IsDefined()
  hotel: Hotel;

  @IsString()
  name: string;

  @IsBoolean()
  balcony: boolean;

  @IsBoolean()
  bathtub: boolean;

  @IsBoolean()
  shower: boolean;

  @IsString()
  view: string;

  @IsNumber()
  adults: number;

  @IsNumber()
  children: number;

  @IsNumber()
  price: number;

  @IsArray()
  @IsOptional()
  rooms: Room[];
}
