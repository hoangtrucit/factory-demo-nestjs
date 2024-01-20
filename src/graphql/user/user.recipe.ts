import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { UserModel } from '@share/protobuf/gRPC/generate/index.app.payment.base.user.v1';
import { IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class UserRecipe implements UserModel {
  @Field(() => String)
  email: string;

  @Field(() => String)
  id: string;

  @Field(() => String)
  userName: string;
}

@ObjectType()
export class CreateUserRecipe {
  @Field(() => String)
  id: string;
}

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  userName: string;
}
