import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ToolModule } from './modules/tool/tool.module'; 

@Module({
  imports: [
    UserModule, 
    ToolModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}