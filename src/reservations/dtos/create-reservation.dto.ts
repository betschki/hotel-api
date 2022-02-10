import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateReservationDto {
  @IsNumber()
  guest: number;

  @IsNumber()
  hotel: number;

  @IsArray()
  roomCategories: number[];

  @IsArray()
  @IsOptional()
  rooms: number[];

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
