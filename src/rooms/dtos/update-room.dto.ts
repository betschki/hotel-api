import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from 'src/categories/categories.entity';
import { Hotel } from 'src/hotels/hotels.entity';

export class UpdateRoomDto {
  @IsNumber()
  @IsOptional()
  hotel: Hotel;

  @IsString()
  @IsOptional()
  roomNumber: string;

  @IsNumber()
  @IsOptional()
  roomCategory: Category;

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
