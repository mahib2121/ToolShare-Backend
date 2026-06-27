import {IsInt, Min} from "class-validator";
export class CreateWalletDto
{
    @IsInt()
    
    userId! : number;

    @Min(0)
    balance! : number;
}