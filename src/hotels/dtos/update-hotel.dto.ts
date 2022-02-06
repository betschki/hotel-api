import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateHotelDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  stars: number;

  @IsString()
  @IsOptional()
  address: string;
}
