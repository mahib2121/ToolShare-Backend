import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductOwnerService } from '../services/product-owner.service';
import { ApproveRentalDTO } from '../dto/approve-rental.dto';
import { HandoverDTO } from '../dto/handover.dto';
import { DepositDTO } from '../dto/deposit.dto';
import { RatingDTO } from '../dto/rating.dto';
import { CreateRentalDTO } from '../dto/create-rental.dto';

@Controller('rent/owner')
export class ProductOwnerController {
  constructor(private readonly productOwnerService: ProductOwnerService) {}

  // URL: http://localhost:3000/rent/owner/rahim
  @Get(':owner')
  getRentalsByOwner(@Param('owner') owner: string): object {
    return this.productOwnerService.getRentalsByOwner(owner);
  }

  // URL: http://localhost:3000/rent/owner/approve
  @Put('approve')
  approveRental(@Body() mydata: ApproveRentalDTO): object {
    return this.productOwnerService.approveRental(mydata);
  }

  // URL: http://localhost:3000/rent/owner/handover
  @Patch('handover')
  handoverItem(@Body() mydata: HandoverDTO): object {
    return this.productOwnerService.handoverItem(mydata);
  }

  // URL: http://localhost:3000/rent/owner/create
  @Post('create')
  createRental(@Body() mydata: CreateRentalDTO): object {
    return this.productOwnerService.createRental(mydata);
  }

  // URL: http://localhost:3000/rent/owner/deposit/lock
  @Post('deposit/lock')
  lockDeposit(@Body() mydata: DepositDTO): object {
    return this.productOwnerService.lockDeposit(mydata);
  }

  // URL: http://localhost:3000/rent/owner/rate
  @Post('rate')
  rateOwner(@Body() mydata: RatingDTO): object {
    return this.productOwnerService.rateOwner(mydata);
  }
}
