import { Module } from '@nestjs/common';
import { ProductRenterController } from '../controllers/product-renter.controller';
import { ProductRenterService } from '../services/product-renter.service';

@Module({
  controllers: [ProductRenterController],
  providers: [ProductRenterService],
})
export class ProductRenterModule {}