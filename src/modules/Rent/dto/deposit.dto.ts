import { IsNotEmpty, IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class DepositDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  rental_id!: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  amount!: number;

  @IsNotEmpty()
  @IsString()
  processed_by!: string;
}
