import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductRenterService } from '../services/product-renter.service';
import { CreateRentalDTO } from '../dto/create-rental.dto';
import { ReturnDTO } from '../dto/return.dto';
import { PaymentDTO } from '../dto/payment.dto';
import { DisputeDTO } from '../dto/dispute.dto';
import { RatingDTO } from '../dto/rating.dto';
import { CancelRentalDTO } from '../dto/cancel-Rental.dto';

@Controller('rent/renter')
export class ProductRenterController {
  constructor(private readonly productRenterService: ProductRenterService) {}

  // URL: http://localhost:3000/rent/renter
  // URL: http://localhost:3000/rent/renter?status=pending
  @Get()
  getAllRentals(@Query('status') status: string): object {
    return this.productRenterService.getAllRentals(status);
  }

  // URL: http://localhost:3000/rent/renter/search?renter=rahim&item=bike
  @Get('search')
  getRentalByRenterAndItem(
    @Query('renter') renter: string,
    @Query('item') item: string,
  ): object {
    return this.productRenterService.getRentalByRenterAndItem(renter, item);
  }

  // URL: http://localhost:3000/rent/renter/history/nirob
  @Get('history/:renter')
  getRentalHistory(@Param('renter') renter: string): object {
    return this.productRenterService.getRentalHistory(renter);
  }

  // URL: http://localhost:3000/rent/renter/create
  @Post('create')
  createRental(@Body() mydata: CreateRentalDTO): object {
    return this.productRenterService.createRental(mydata);
  }

  // URL: http://localhost:3000/rent/renter/pay
  @Post('pay')
  payRentalFee(@Body() mydata: PaymentDTO): object {
    return this.productRenterService.payRentalFee(mydata);
  }

  // URL: http://localhost:3000/rent/renter/dispute
  @Post('dispute')
  submitDispute(@Body() mydata: DisputeDTO): object {
    return this.productRenterService.submitDispute(mydata);
  }

  // URL: http://localhost:3000/rent/renter/return
  @Patch('return')
  returnItem(@Body() mydata: ReturnDTO): object {
    return this.productRenterService.returnItem(mydata);
  }

  // URL: http://localhost:3000/rent/renter/rate
  @Post('rate')
  rateOwner(@Body() mydata: RatingDTO): object {
    return this.productRenterService.rateOwner(mydata);
  }

  // URL: http://localhost:3000/rent/renter/cancel
  @Patch('cancel')
  cancelRental(@Body() mydata: CancelRentalDTO): object {
    return this.productRenterService.cancelRental(mydata);
  }
}
