import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Room } from 'src/rooms/rooms.entity';

export class CreateCategoryDto {
  @IsString()
  hotel: number;

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
