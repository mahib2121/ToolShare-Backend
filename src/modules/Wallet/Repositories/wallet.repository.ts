import {Wallet} from "../Entities/wallet.entity";
import {WalletDatabase} from "../Database/WalletDatabase";
import {CreateWalletDto} from "../Dto/create-wallet.dto";
import { IS_MILITARY_TIME } from "class-validator";
import { Injectable } from "@nestjs/common";

@Injectable()

export class WalletRepository
{
    getAll():Wallet[]
    {
        return WalletDatabase;
    }
    getById(id:number):Wallet | undefined
    {
        return  WalletDatabase.find(Wallet=>Wallet.id===id);

    }
    getByUserId(userId: number) :Wallet | undefined
    {
        return WalletDatabase.find(Wallet=>Wallet.userId===userId);

    }
    save (wallet :Wallet) : Wallet
    {
        WalletDatabase.push(wallet);
        return wallet;
    }
    update(wallet : Wallet) :Wallet
    {
        const index=
        WalletDatabase.findIndex(item=>item.id===wallet.id);
        WalletDatabase[index]=wallet;
        return wallet;
    }
    delete(id: number): void
     {
            const index=
        WalletDatabase.findIndex(item=>item.id===id);
       if(index!==-1)
       {
        WalletDatabase.splice(index,1);
       }
    }
}