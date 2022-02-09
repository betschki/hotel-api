import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRoomDto {
  @IsNumber()
  @IsOptional()
  hotel: number;

  @IsString()
  @IsOptional()
  roomNumber: string;

  @IsNumber()
  @IsOptional()
  roomCategory: number;

  @IsNumber()
  @IsOptional()
  size: number;

  @IsBoolean()
  @IsOptional()
  smoking: boolean;

  @IsBoolean()
  @IsOptional()
  pets: boolean;
}
