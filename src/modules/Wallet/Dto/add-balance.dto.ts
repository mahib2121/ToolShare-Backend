import { IsInt, Min } from 'class-validator';

export class AddBalanceDto {

    @IsInt()
    walletId: number;

    @IsInt()
    @Min(1)
    amount: number;
}