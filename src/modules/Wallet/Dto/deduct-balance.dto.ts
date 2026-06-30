import { IsInt, Min } from 'class-validator';

export class DeductBalanceDto {

    @IsInt()
    walletId!: number;

    @IsInt()
    @Min(1)
    amount!: number;
}