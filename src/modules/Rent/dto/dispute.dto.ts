import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class DisputeDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rental_id!: number;

  @IsNotEmpty()
  @IsString()
  submitted_by!: string;

  @IsNotEmpty()
  @IsString()
  reason!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;
}