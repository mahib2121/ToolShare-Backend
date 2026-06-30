import { IsNotEmpty, IsNumber, IsPositive, IsString, IsDateString } from 'class-validator';

export class HandoverDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rental_id!: number;

  @IsNotEmpty()
  @IsDateString()
  handover_date!: string;

  @IsNotEmpty()
  @IsString()
  condition!: string;
}