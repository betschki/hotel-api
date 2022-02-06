import { IsNumber, IsString } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  name: string;

  @IsNumber()
  stars: number;

  @IsString()
  address: string;
}
