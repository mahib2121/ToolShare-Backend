import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Query,
  Body,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { ProductRenterService } from '../services/product-renter.service';
import { CreateRentalDTO } from '../dto/create-rental.dto';
import { ReturnDTO } from '../dto/return.dto';
import { PaymentDTO } from '../dto/payment.dto';
import { DisputeDTO } from '../dto/dispute.dto';
import { RatingDTO } from '../dto/rating.dto';
import { CancelRentalDTO } from '../dto/cancel-Rental.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, MulterError } from 'multer';
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
  @UsePipes(new ValidationPipe())
  @UseInterceptors(
    FileInterceptor('nid_image', {
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|jpeg|png|webp)$/)) {
          cb(null, true);
        } else {
          cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'nid_image'), false);
        }
      },
      limits: {
        fileSize: 2 * 1024 * 1024, // 2 MB
      },
      storage: diskStorage({
        destination: './uploads/nid',
        filename: (req, file, cb) => {
          cb(null, Date.now() + '_' + file.originalname);
        },
      }),
    }),
  )
  createRental(
    @Body() mydata: CreateRentalDTO,
    @UploadedFile() nidFile: Express.Multer.File,
  ): object {
    mydata.nid_image = nidFile.filename;
    return this.productRenterService.createRental(mydata);
  }

  // URL: http://localhost:3000/rent/renter/nid/1782637240167_git.jpeg
  @Get('nid/:filename')
  getNidImage(@Param('filename') filename: string, @Res() res: any) {
    res.sendFile(filename, { root: './uploads/nid' });
  }

  // URL: http://localhost:3000/rent/renter/pay
  @Post('pay')
  @UsePipes(new ValidationPipe())
  payRentalFee(@Body() mydata: PaymentDTO): object {
    return this.productRenterService.payRentalFee(mydata);
  }

  // URL: http://localhost:3000/rent/renter/dispute
  @Post('dispute')
  @UsePipes(new ValidationPipe())
  submitDispute(@Body() mydata: DisputeDTO): object {
    return this.productRenterService.submitDispute(mydata);
  }

  // URL: http://localhost:3000/rent/renter/return
  @Patch('return')
  @UsePipes(new ValidationPipe())
  returnItem(@Body() mydata: ReturnDTO): object {
    return this.productRenterService.returnItem(mydata);
  }

  // URL: http://localhost:3000/rent/renter/rate
  @Post('rate')
  @UsePipes(new ValidationPipe())
  rateOwner(@Body() mydata: RatingDTO): object {
    return this.productRenterService.rateOwner(mydata);
  }

  // URL: http://localhost:3000/rent/renter/cancel
  @Patch('cancel')
  @UsePipes(new ValidationPipe())
  cancelRental(@Body() mydata: CancelRentalDTO): object {
    return this.productRenterService.cancelRental(mydata);
  }
}
