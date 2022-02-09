import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsNumber()
  hotel: number;

  @IsString()
  roomNumber: string;

  @IsNumber()
  roomCategory: number;

  @IsNumber()
  size: number;

  @IsBoolean()
  smoking: boolean;

  @IsBoolean()
  pets: boolean;
}
