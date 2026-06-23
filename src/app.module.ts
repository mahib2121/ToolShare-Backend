import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ToolModule } from './modules/tool/tool.module'; 
import { WalletModule } from './modules/Wallet/Module/wallet-Module';

@Module({
  imports: [
    UserModule, 
    ToolModule,
    WalletModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
