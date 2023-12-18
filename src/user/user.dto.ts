import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import * as dayjs from 'dayjs';
import { Field, ObjectType } from '@nestjs/graphql';
import { IUserEntity } from 'src/postgresql/entities/user.entity';

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

@ObjectType()
export class UserRecipe implements IUserEntity {
  @Field(() => String)
  email: string;

  @Field(() => String)
  id: string;
}
