import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import * as dayjs from 'dayjs';
import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/postgresql/entities';
import { OmitType } from '@nestjs/swagger';

export class UserDTO extends OmitType(UserEntity, ['id']) {
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

export class UserResponse extends UserDTO {
  @IsString()
  id: string;
}

@ObjectType()
export class UserRecipe {
  @Field(() => String)
  email: string;

  @Field(() => String)
  id: string;
}
