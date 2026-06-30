import {IsNotEmpty,IsNumber,IsPositive,IsString,Min,Max} from 'class-validator';

export class RatingDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rental_id!: number;

  @IsNotEmpty()
  @IsString()
  renter_name!: string;

  @IsNotEmpty()
  @IsString()
  owner_name!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating!: number;

  @IsNotEmpty()
  @IsString()
  comment!: string;
}