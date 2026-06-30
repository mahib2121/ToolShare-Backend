import 
{
    Body,
    Controller,
    Get,
    Post,
    UploadedFiles,
    UploadedFile,
    UseInterceptors,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'
import { lCreateAdminDto } from '../DTO/create-admin.dto';
import { luser } from '../Entity/lUser.entity';
import {lUserService} from '../Services/userService';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, MulterError } from 'multer';
import { BadRequestException } from '@nestjs/common';
import {lCreateModeratorDto} from "../DTO/create-moderator.dto"
import { lCreateRenterDto } from '../DTO/create-renter.dto';
import { lCreateVendorDto } from '../DTO/create-vendor.dto';
@Controller('test')
export class TestController {

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(file);
    return file;
  }
}