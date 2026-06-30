import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';

import { Role } from '../Enums/role.enum';

export class lCreateAdminDto {

  @IsNotEmpty({ message: 'Name is required.' })
  @IsString({ message: 'Name must be a string.' })
  @Matches(/^[A-Za-z\s]+$/, {
    message: 'Name should contain only alphabets.'
  })
  name!: string;

  @IsNotEmpty({ message: 'Email is required.' })
  @IsEmail({}, {
    message: 'Invalid email format.'
  })
  @Matches(/^[^\s@]+@[^\s@]+\.xyz$/,
     {
    message: 'Email must end with .xyz.'
  })
  email!: string;

  @IsNotEmpty({
    message: 'NID Number is required.'
  })
  @Matches(/^(\d{10}|\d{13}|\d{17})$/, {
    message: 'NID must be 10, 13 or 17 digits.'
  })
  nidNumber!: string;

   nidFrontImage!: string;

    nidBackImage!: string;

  
}