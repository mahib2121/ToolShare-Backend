import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ToolModule } from './modules/tool/tool.module'; 
import { WalletModule } from './modules/Wallet/Module/wallet-Module';
import { ProductOwnerModule } from './modules/Rent/modules/product-owner.module';
import { ProductRenterModule } from './modules/Rent/modules/product-renter.module';

@Module({
  imports: [
    UserModule, 
    ToolModule,
    WalletModule,
    ProductOwnerModule,
    ProductRenterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
