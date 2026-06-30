import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsPositive,
  IsDateString,
  Matches,
  Min,
} from 'class-validator';

export class CreateRentalDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  item_id!: number;

  @IsNotEmpty()
  @IsString()
  item_name!: string;

  @IsNotEmpty()
  @IsString()
  owner_name!: string;

  @IsNotEmpty()
  @IsString()
  renter_name!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price_per_day!: number;

  @IsNotEmpty()
  @IsDateString()
  start_date!: string;

  @IsNotEmpty()
  @IsDateString()
  end_date!: string;

  @IsNotEmpty()
  @Matches(/^\d{17}$/, {
    message: 'NID must be 17 digits',
  })
  nid_number!: string;

  @IsNotEmpty()
  @IsString()
  nid_image!: string;
}