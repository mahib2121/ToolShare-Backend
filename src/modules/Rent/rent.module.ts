import { Module } from '@nestjs/common';
import { RentController } from './rent.controller';
import { RentService } from './rent.service';

@Module({
  controllers: [RentController],
  providers: [RentService],
})
export class RentModule {}
