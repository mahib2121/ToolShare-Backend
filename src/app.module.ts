import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
<<<<<<< HEAD
import { RentModule } from './modules/Rent/rent.module';

@Module({
  imports: [UserModule,RentModule],
=======
import { ToolModule } from './modules/tool/tool.module'; 

@Module({
  imports: [
    UserModule, 
    ToolModule 
  ],
>>>>>>> 423d2a19838bb72cac6ee834d1174e6b448e85f2
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}