import { IsNumber, IsString, IsOptional } from 'class-validator';
import { Address } from 'src/common/interfaces/address.interface';

export class UpdateHotelDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  stars: number;

  @IsString()
  @IsOptional()
  address: Address;
}
