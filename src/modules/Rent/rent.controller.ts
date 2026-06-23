import {Controller,Get,Post,Put,Patch,Delete,Param,Query,Body,ParseIntPipe} from '@nestjs/common';
import { RentService } from './rent.service';
import { CreateRentalDTO } from './dto/create-rental.dto';
import { ApproveRentalDTO } from './dto/approve-rental.dto';
import { HandoverDTO } from './dto/handover.dto';
import { ReturnDTO } from './dto/return.dto';
import { PaymentDTO } from './dto/payment.dto';
import { DepositDTO } from './dto/deposit.dto';
import { DisputeDTO } from './dto/dispute.dto';
import { RatingDTO } from './dto/rating.dto';

@Controller('rent')
export class RentController {
  constructor(private readonly rentService: RentService) {}

  // URL: http://localhost:3000/rent
  // URL: http://localhost:3000/rent?status=pending
  @Get()
  getAllRentals(@Query('status') status: string): object {
    return this.rentService.getAllRentals(status);
  }

  // URL: http://localhost:3000/rent/search?renter=rahim&item=bike
  @Get('search')
  getRentalByRenterAndItem(
    @Query('renter') renter: string,
    @Query('item') item: string,
  ): object {
    return this.rentService.getRentalByRenterAndItem(renter, item);
  }

  // URL: http://localhost:3000/rent/history/Nirob
  @Get('history/:renter')
  getRentalHistory(@Param('renter') renter: string): object {
    return this.rentService.getRentalHistory(renter);
  }

  // URL: http://localhost:3000/rent/owner/rahim
  @Get('owner/:owner')
  getRentalsByOwner(@Param('owner') owner: string): object {
    return this.rentService.getRentalsByOwner(owner);
  }

  // URL: http://localhost:3000/rent/5
  @Get(':id')
  getRentalById(@Param('id', ParseIntPipe) id: number): object {
    return this.rentService.getRentalById(id);
  }

  // URL: http://localhost:3000/rent/create
  @Post('create')
  createRental(@Body() mydata: CreateRentalDTO): object {
    return this.rentService.createRental(mydata);
  }

  // URL: http://localhost:3000/rent/pay
  @Post('pay')
  payRentalFee(@Body() mydata: PaymentDTO): object {
    return this.rentService.payRentalFee(mydata);
  }

  // URL: http://localhost:3000/rent/deposit/lock
  @Post('deposit/lock')
  lockDeposit(@Body() mydata: DepositDTO): object {
    return this.rentService.lockDeposit(mydata);
  }

  // URL: http://localhost:3000/rent/dispute
  @Post('dispute')
  submitDispute(@Body() mydata: DisputeDTO): object {
    return this.rentService.submitDispute(mydata);
  }

  // URL: http://localhost:3000/rent/rate
  @Post('rate')
  rateOwner(@Body() mydata: RatingDTO): object {
    return this.rentService.rateOwner(mydata);
  }

  // URL: http://localhost:3000/rent/approve
  @Put('approve')
  approveRental(@Body() mydata: ApproveRentalDTO): object {
    return this.rentService.approveRental(mydata);
  }

  // URL: http://localhost:3000/rent/handover
  @Patch('handover')
  handoverItem(@Body() mydata: HandoverDTO): object {
    return this.rentService.handoverItem(mydata);
  }

  // URL: http://localhost:3000/rent/return
  @Patch('return')
  returnItem(@Body() mydata: ReturnDTO): object {
    return this.rentService.returnItem(mydata);
  }

  // URL: http://localhost:3000/rent/cancel/5
  @Delete('cancel/:id')
  cancelRental(@Param('id', ParseIntPipe) id: number): object {
    return this.rentService.cancelRental(id);
  }
}