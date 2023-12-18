// Libs importing
import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { UserRecipe } from 'src/user/user.dto';
import {
  I_USER_REPOSITORY,
  UserRepository,
} from 'src/postgresql/repositories/user.repository';
import { Inject } from '@nestjs/common';
import {
  I_POST_REPOSITORY,
  PostRepository,
} from 'src/postgresql/repositories/post.repository';
import { PostRecipe } from 'src/post/post.dto';

@Resolver(() => UserRecipe)
export class UserResolver {
  constructor(
    @Inject(I_USER_REPOSITORY)
    private userRepository: UserRepository,
    @Inject(I_POST_REPOSITORY)
    private postRepository: PostRepository,
  ) {
    //
  }

  @Query(() => [UserRecipe], { name: 'user' })
  async user(): Promise<UserRecipe[]> {
    return await this.userRepository.findAll();
  }

  @ResolveField(() => [PostRecipe], { name: 'posts' })
  async posts(@Parent() parent: UserRecipe): Promise<PostRecipe[]> {
    return await this.postRepository.findAll({
      where: {
        createdBy: parent.id,
      },
    });
  }

  @Mutation(() => Boolean)
  async upvotePost(
    @Args({ name: 'postId', type: () => Number }) postId: number,
  ): Promise<boolean> {
    console.log('🚀🚀🚀 file: user.resolver.ts [line 55] ', postId);
    return true;
  }
}
