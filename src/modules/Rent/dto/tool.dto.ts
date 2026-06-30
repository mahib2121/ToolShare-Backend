import {IsNotEmpty, IsString,IsNumber,IsPositive,MinLength,MaxLength} from 'class-validator';

export class CreateToolDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(100)
  tool_name!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(500)
  description!: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price_per_day!: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  owner_name!: string;

  @IsNotEmpty()
  @IsString()
  tool_image!: string;
}