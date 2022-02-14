import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Category } from 'src/categories/categories.entity';
import { Room } from 'src/rooms/rooms.entity';

export class CreateReservationDto {
  @IsNumber()
  guest: number;

  @IsNumber()
  hotel: number;

  @IsArray()
  roomCategories: Category[];

  @IsArray()
  @IsOptional()
  rooms: Room[];

  @IsDate()
  arrival: Date;

  @IsDate()
  departure: Date;

  @IsNumber()
  price: number;

  @IsNumber()
  adults: number;

  @IsNumber()
  children: number;

  @IsBoolean()
  pets: boolean;

  @IsBoolean()
  @IsOptional()
  notes: string;
}
