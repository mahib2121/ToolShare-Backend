import { Module } from "@nestjs/common";
import { WalletController } from "../Controllers/wallet.controller";
import { WalletService } from "../Services/wallet.service";
import { WalletRepository } from "../Repositories/wallet.repository";

@Module(
    {
  controllers: [WalletController],
  providers: [WalletService,WalletRepository],

}

)
export class WalletModule
{

}