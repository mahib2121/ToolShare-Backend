import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CancelRentalDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rental_id!: number;

  @IsNotEmpty()
  @IsString()
  cancelled_by!: string;

  @IsNotEmpty()
  @IsString()
  reason!: string;
}