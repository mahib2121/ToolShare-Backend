import { IsNotEmpty, IsNumber, IsPositive, IsString, IsDateString } from 'class-validator';

export class ReturnDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rental_id!: number;

  @IsNotEmpty()
  @IsDateString()
  return_date!: string;

  @IsNotEmpty()
  @IsString()
  received_by!: string;

  @IsString()
  damage_note!: string;
}