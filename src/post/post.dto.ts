import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostRecipe {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;
}
