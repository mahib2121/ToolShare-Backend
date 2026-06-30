import {
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class lCreateRenterDto {

  @IsNotEmpty({
    message: 'Name is required.',
  })
  @IsString({
    message: 'Name must be a string.',
  })
  @Matches(/^[A-Za-z0-9\s]+$/, 
    {
    message: 'Name must not contain any special character.',
  })
  name!: string;

  @IsNotEmpty({
    message: 'Password is required.',
  })
  @MinLength(6, {
    message: 'Password must be at least 6 characters.',
  })
  @Matches(/[a-z]/, {
    message: 'Password must contain at least one lowercase character.',
  })
  password!: string;

  @IsNotEmpty({
    message: 'Phone number is required.',
  })
  @Matches(/^01[0-9]{9}$/, {
    message: 'Phone number must start with 01.',
  })
  phone!: string;

  // Will be assigned after upload
  document!: string;
}