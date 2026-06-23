import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { RentModule } from './modules/Rent/rent.module';

@Module({
  imports: [UserModule,RentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
