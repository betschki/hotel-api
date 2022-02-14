import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Hotel } from 'src/hotels/hotels.entity';
import { Room } from 'src/rooms/rooms.entity';

export class UpdateCategoryDto {
  @IsOptional()
  hotel: Hotel;

  @IsString()
  @IsOptional()
  name: string;

  @IsBoolean()
  @IsOptional()
  balcony: boolean;

  @IsBoolean()
  @IsOptional()
  bathtub: boolean;

  @IsBoolean()
  @IsOptional()
  shower: boolean;

  @IsString()
  @IsOptional()
  view: string;

  @IsNumber()
  @IsOptional()
  adults: number;

  @IsNumber()
  @IsOptional()
  children: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsArray()
  @IsOptional()
  rooms: Room[];
}
