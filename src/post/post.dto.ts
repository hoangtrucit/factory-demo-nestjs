import { Field, ObjectType } from '@nestjs/graphql';
import { IPostEntity } from 'src/postgresql/entities/post.entity';

@ObjectType()
export class PostRecipe implements IPostEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;
}
