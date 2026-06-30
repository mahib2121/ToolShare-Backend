import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { ProductOwnerService } from '../services/product-owner.service';
import { ApproveRentalDTO } from '../dto/approve-rental.dto';
import { HandoverDTO } from '../dto/handover.dto';
import { DepositDTO } from '../dto/deposit.dto';
import { CancelRentalDTO } from '../dto/cancel-Rental.dto';
import { CreateToolDTO } from '../dto/tool.dto';
import { diskStorage, MulterError } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

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
  @UsePipes(new ValidationPipe())
  approveRental(@Body() mydata: ApproveRentalDTO): object {
    return this.productOwnerService.approveRental(mydata);
  }

  // URL: http://localhost:3000/rent/owner/handover
  @Patch('handover')
  @UsePipes(new ValidationPipe())
  handoverItem(@Body() mydata: HandoverDTO): object {
    return this.productOwnerService.handoverItem(mydata);
  }

  // URL: http://localhost:3000/rent/owner/deposit/lock
  @Post('deposit/lock')
  @UsePipes(new ValidationPipe())
  lockDeposit(@Body() mydata: DepositDTO): object {
    return this.productOwnerService.lockDeposit(mydata);
  }

  // URL: http://localhost:3000/rent/owner/create
  @Post('create')
  @UsePipes(new ValidationPipe())
  @UseInterceptors(
    FileInterceptor('tool_image', {
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|jpeg|png|webp)$/i)) {
          cb(null, true);
        } else {
          cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'tool_image'), false);
        }
      },
      limits: {
        fileSize: 2 * 1024 * 1024, // 2 MB
      },
      storage: diskStorage({
        destination: './uploads/tools',
        filename: (req, file, cb) => {
          cb(null, Date.now() + '_' + file.originalname);
        },
      }),
    }),
  )
  createTool(
    @Body() mydata: CreateToolDTO,
    @UploadedFile() toolFile: Express.Multer.File,
  ): object {
    mydata.tool_image = toolFile.filename;
    return this.productOwnerService.createTool(mydata);
  }

  // URL: http://localhost:3000/rent/owner/tools/1782638519425_images.jpg
  @Get('tools/:filename')
  getToolImage(@Param('filename') filename: string, @Res() res: any) {
    res.sendFile(filename, { root: './uploads/tools' });
  }


  // URL: http://localhost:3000/rent/owner/deposit/release
  @Post('deposit/release')
  @UsePipes(new ValidationPipe())
  releaseDeposit(@Body() mydata: DepositDTO): object {
    return this.productOwnerService.releaseDeposit(mydata);
  }

  // URL: http://localhost:3000/rent/owner/cancel
  @Patch('cancel')
  @UsePipes(new ValidationPipe())
  cancelRental(@Body() mydata: CancelRentalDTO): object {
    return this.productOwnerService.cancelRental(mydata);
  }
}
