import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ToolModule } from './modules/tool/tool.module'; 
import { WalletModule } from './modules/Wallet/Module/wallet-Module';
import { RentModule } from './modules/Rent/rent.module';

@Module({
  imports: [
    UserModule, 
    ToolModule,
    WalletModule,
    RentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
