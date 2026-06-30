import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class ApproveRentalDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rental_id!: number;

  @IsNotEmpty()
  @IsString()
  approved_by!: string;

  @IsNotEmpty()
  @IsString()
  note!: string;
}