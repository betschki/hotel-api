import { IsNumber, IsObject, IsString } from 'class-validator';
import { Address } from 'src/common/interfaces/address.interface';

export class CreateHotelDto {
  @IsString()
  name: string;

  @IsNumber()
  stars: number;

  @IsObject()
  address: Address;
}
