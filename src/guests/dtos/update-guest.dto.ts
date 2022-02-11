import { IsObject, IsOptional, IsString } from 'class-validator';
import { Address } from 'src/common/interfaces/address.interface';

export class UpdateGuestDto {
  @IsString()
  @IsOptional()
  firstname: string;

  @IsString()
  @IsOptional()
  surname: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsString()
  @IsOptional()
  paymentMethod: string;

  @IsObject()
  @IsOptional()
  billingAddress: Address;

  @IsString()
  @IsOptional()
  notes: string;
}
