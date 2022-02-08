import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRoomDto {
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
}
