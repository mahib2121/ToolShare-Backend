import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

import { Gender } from '../Enums/gender.enum';

export class lCreateModeratorDto {

  @IsNotEmpty({
    message: 'Email is required.',
  })
  @IsEmail({}, {
    message: 'Invalid email format.',
  })
  @Matches(/^[^\s@]+@aiub\.edu$/, {
    message: 'Email must end with @aiub.edu.',
  })
  email!: string;

  @IsNotEmpty({
    message: 'Password is required.',
  })
  @MinLength(6, {
    message: 'Password must be at least 6 characters.',
  })
  @Matches(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter.',
  })
  password!: string;

  @IsNotEmpty({
    message: 'Gender is required.',
  })
  @IsEnum(Gender, {
    message: 'Gender must be Male or Female.',
  })
  gender!: Gender;

  @IsNotEmpty({
    message: 'Phone number is required.',
  })
  @IsString()
  @Matches(/^[0-9]+$/, {
    message: 'Phone number must contain only numbers.',
  })
  phone!: string;
}