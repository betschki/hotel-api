import {
  IsBoolean,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Category } from 'src/categories/categories.entity';
import { Hotel } from 'src/hotels/hotels.entity';

export class CreateRoomDto {
  @IsDefined()
  hotel: Hotel;

  @IsString()
  roomNumber: string;

  @IsDefined()
  roomCategory: Category;

  @IsNumber()
  size: number;

  @IsBoolean()
  smoking: boolean;

  @IsBoolean()
  pets: boolean;
}
