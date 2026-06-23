import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { RentModule } from './modules/Rent/rent.module';
import { ToolModule } from './modules/tool/tool.module';

@Module({
  imports: [UserModule, RentModule, ToolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
