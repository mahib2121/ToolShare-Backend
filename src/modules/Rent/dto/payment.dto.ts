import {IsNotEmpty,IsNumber,IsPositive,IsString,IsIn,Min} from 'class-validator';

export class PaymentDTO {
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
  @IsIn(['cash', 'bkash', 'nagad', 'rocket', 'card'], {
    message: 'payment_method must be one of: cash, bkash, nagad, rocket, card',
  })
  payment_method!: string;

  @IsNotEmpty()
  @IsString()
  paid_by!: string;
}