import { IsBoolean, IsNumber, IsString } from 'class-validator';

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
}
