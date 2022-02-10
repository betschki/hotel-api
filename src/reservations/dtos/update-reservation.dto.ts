import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class UpdateReservationDto {
  @IsNumber()
  @IsOptional()
  guest: number;

  @IsNumber()
  @IsOptional()
  hotel: number;

  @IsArray()
  @IsOptional()
  roomCategories: number[];

  @IsArray()
  @IsOptional()
  rooms: number[];

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
