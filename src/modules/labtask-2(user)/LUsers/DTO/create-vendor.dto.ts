import {
  IsDateString,
  IsNotEmpty,
  IsString,
  IsUrl,
  Matches,
} from 'class-validator';

export class lCreateVendorDto
 {

  @IsNotEmpty({
    message: 'Name is required.',
  })
  @IsString({
    message: 'Name must be a string.',
  })
  @Matches(/^[A-Za-z\s]+$/, {
    message: 'Name should not contain any numbers.',
  })
  name!: string;

  @IsNotEmpty({
    message: 'Password is required.',
  })
  @Matches(/[@#$&]/, {
    message: 'Password must contain at least one special character (@, #, $, &).',
  })
  password!: string;

  @IsNotEmpty({
    message: 'Date is required.',
  })
  @IsDateString({}, {
    message: 'Invalid date format.',
  })
  date!: string;

  @IsNotEmpty({
    message: 'Social media link is required.',
  })
  @IsUrl({}, {
    message: 'Invalid URL.',
  })
  socialMediaLink!: string;
}