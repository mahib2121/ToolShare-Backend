import {Wallet} from "../Entities/wallet.entity";
export const WalletDatabase: Wallet[] = 
[
    {
        id:1,
        userId:1,
        balance:100,
        createdAt:new Date(),
        updatedAt:new Date(),
         isActive: true
    },
    {
        id:2,
        userId:2,
        balance:200,
        createdAt:new Date(),
        updatedAt:new Date(),
        isActive: true
    },
    {
        id:3,
        userId:3,
        balance:300,
        createdAt:new Date(),
        updatedAt:new Date(),
         isActive: true
    }

]