import { Module } from '@nestjs/common';
import { ProductOwnerController } from '../controllers/product-owner.controller';
import { ProductOwnerService } from '../services/product-owner.service';

@Module({
  controllers: [ProductOwnerController],
  providers: [ProductOwnerService],
})
export class ProductOwnerModule {}