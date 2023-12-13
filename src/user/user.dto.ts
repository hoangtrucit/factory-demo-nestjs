import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import * as dayjs from 'dayjs';

export class UserDTO {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsDate()
  @Transform(({ value }) => dayjs(value, 'MM-DD-YYYY').toDate())
  dob: Date;

  @IsNumber()
  age = 16;
}
