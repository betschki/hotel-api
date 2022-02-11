import { IsObject, IsOptional, IsString } from 'class-validator';
import { Address } from 'src/common/interfaces/address.interface';

export class CreateGuestDto {
  @IsString()
  firstname: string;

  @IsString()
  surname: string;

  @IsString()
  gender: string;

  @IsString()
  paymentMethod: string;

  @IsObject()
  billingAddress: Address;

  @IsString()
  @IsOptional()
  notes: string;
}
