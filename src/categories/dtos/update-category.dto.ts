import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Room } from 'src/rooms/rooms.entity';

export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  hotel: number;

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
