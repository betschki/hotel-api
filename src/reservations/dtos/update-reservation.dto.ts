import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Category } from 'src/categories/categories.entity';
import { Room } from 'src/rooms/rooms.entity';

export class UpdateReservationDto {
  @IsNumber()
  @IsOptional()
  guest: number;

  @IsNumber()
  @IsOptional()
  hotel: number;

  @IsArray()
  @IsOptional()
  roomCategories: Category[];

  @IsArray()
  @IsOptional()
  rooms: Room[];

  @IsDate()
  @IsOptional()
  arrival: Date;

  @IsDate()
  @IsOptional()
  departure: Date;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  adults: number;

  @IsNumber()
  @IsOptional()
  children: number;

  @IsBoolean()
  @IsOptional()
  pets: boolean;

  @IsBoolean()
  @IsOptional()
  notes: string;
}
