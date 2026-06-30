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
@Controller('lUser')
export class lUserController
{
    constructor(private readonly lUserService : lUserService)
    {

    }
    @Post('/addadmin')
@UseInterceptors(
    FileFieldsInterceptor(
        // Upload Fields
        [
            { name: 'nidFrontImage', maxCount: 1 },
            { name: 'nidBackImage', maxCount: 1 },
        ],

        // Multer Options
        {
            // File Validation
            fileFilter: (req, file, cb) =>
            {
                if (file.originalname.match(/^.*\.(jpg|jpeg|png|webp)$/))
                {
                    cb(null, true);
                }
                else
                {
                    const error = new MulterError(
                        'LIMIT_UNEXPECTED_FILE',
                        file.fieldname,
                    );

                    cb(error, false);
                }
            },

            // File Size Limit
            limits:
            {
                fileSize: 2 * 1024 * 1024,
            },

            // File Storage
            storage: diskStorage(
                {
                    // Upload Folder
                    destination: './src/modules/labtask-2(user)/luploads',

                    // Rename File
                    filename: (req, file, cb) =>
                    {
                        cb(
                            null,
                            Date.now() + '_' + file.originalname,
                        );
                    },
                },
            ),
        },
    ),
)
@UsePipes(new ValidationPipe())
addAdmin(
    @Body() data: lCreateAdminDto,

    @UploadedFiles()
    files:
    {
        nidFrontImage?: Express.Multer.File[];
        nidBackImage?: Express.Multer.File[];
    },
): luser
{
     if (!files.nidFrontImage || !files.nidBackImage) {
    throw new BadRequestException(
        'Both NID Front and NID Back images are required.',
    );
}

data.nidFrontImage = files.nidFrontImage[0].filename;
data.nidBackImage = files.nidBackImage[0].filename;

console.log(data);
console.log(files);

return this.lUserService.createAdmin(data);
}



//get all admin
@Get('/admins')
getAdmins(): luser[] {

    return this.lUserService.getAdmins();

}


//task 2 catagory 2
@Post('/addmoderator')
@UsePipes(new ValidationPipe())
addModerator(
    @Body() data: lCreateModeratorDto,
): luser {

    console.log(data);

    return this.lUserService.createModerator(data);

}

@Get('/moderators')
getModerators(): luser[] {

    return this.lUserService.getModerators();

}

//task3
@Post('/addrenter')
@UseInterceptors(
    FileInterceptor(
        'document',
        {
            fileFilter: (req, file, cb) => {

                if (file.originalname.match(/^.*\.(pdf)$/)) {
                    cb(null, true);
                } else {
                    cb(
                        new MulterError(
                            'LIMIT_UNEXPECTED_FILE',
                            'document',
                        ),
                        false,
                    );
                }

            },

            limits: {
                fileSize: 2 * 1024 * 1024,
            },

            storage: diskStorage({

                destination: './src/modules/labtask-2(user)/luploads',

                filename: (req, file, cb) => {

                    cb(
                        null,
                        Date.now() + '_' + file.originalname,
                    );

                },

            }),

        },
    ),
)
@UsePipes(new ValidationPipe())
addRenter(

    @Body() data: lCreateRenterDto,

    @UploadedFile() file: Express.Multer.File,

): luser {

    data.document = file.filename;

    return this.lUserService.createRenter(data);

}
//getallrenter
@Get('/renters')
getRenters(): luser[] {

    return this.lUserService.getRenters();

}
//task4
@Post('/addvendor')
@UsePipes(new ValidationPipe())
addVendor(
    @Body() data: lCreateVendorDto,
): luser {

    console.log(data);

    return this.lUserService.createVendor(data);

}
@Get('/vendors')
getVendors(): luser[] {

    return this.lUserService.getVendors();

}


}


