import { WalletRepository } from "../Repositories/wallet.repository";
import { CreateWalletDto } from "../Dto/create-wallet.dto";
import { Wallet } from "../Entities/wallet.entity";
import { Injectable } from "@nestjs/common";



@Injectable()
export class WalletService 
{
    constructor(private readonly walletRepository : WalletRepository )
    {

    }
    create (createWalletDto : CreateWalletDto):Wallet 
    {
            const id=createWalletDto.userId;
            const existingWallet =
            this.walletRepository.getByUserId(id);

        

        if (existingWallet) {
            throw new Error(
                'Wallet already exists for this user'
            );
        }

        const wallet: Wallet =
         {
            id: Date.now(),

            userId: createWalletDto.userId,

            balance: createWalletDto.balance,

            createdAt: new Date(),

            updatedAt: new Date(),
            isActive : true
        };

        return this.walletRepository.save(wallet);
    }
    getAll() :Wallet[]
    {
        return this.walletRepository.getAll();
    }
    getById(id : number) : Wallet
    {
        const wallet =
            this.walletRepository.getById(id);

        if (!wallet) {
            throw new Error(
                'Wallet not found'
            );
        }

        return wallet;
    }
    getByUserId(userId : number) : Wallet
    {
        const wallet =
            this.walletRepository.getByUserId(
                userId
            );

        if (!wallet) {
            throw new Error(
                'Wallet not found'
            );
        }

        return wallet;
    }
    addBalance(walletId : number, amount :number) : Wallet
    {
        const wallet =
            this.getByUserId(walletId);

        wallet.balance+=amount;

        wallet.updatedAt = new Date();

        return this.walletRepository.update(
            wallet
        );
    }
    deductBalance(walletId : number, amount : number) : Wallet
    {
        const wallet=
        this.getById(walletId);
        if(wallet.balance<amount)
        {
            throw new Error("Insufficent balance");
        }
        wallet.balance-=amount;
        wallet.updatedAt = new Date();

        return this.walletRepository.update(wallet);
            
    }


    activateWallet(id: number): Wallet {

    const wallet =
        this.getById(id);

    wallet.isActive = true;

    wallet.updatedAt =
        new Date();

    return this.walletRepository.update(
        wallet
    );
}
  deactivateWallet(id: number): Wallet 
  {

    const wallet =
        this.getById(id);

    wallet.isActive = false;

    wallet.updatedAt =
        new Date();

    return this.walletRepository.update(
        wallet
    );
}
    
}
