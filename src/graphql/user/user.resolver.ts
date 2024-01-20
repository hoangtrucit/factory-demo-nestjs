// Libs importing
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateUserInput, CreateUserRecipe, UserRecipe } from './user.recipe';
import { USER_TOKEN_SERVICE, UserService } from 'src/user/user.service';

@Resolver(() => UserRecipe)
export class UserResolver {
  constructor(@Inject(USER_TOKEN_SERVICE) private userService: UserService) {}

  @Query(() => [UserRecipe], { name: 'users' })
  async user(): Promise<UserRecipe[]> {
    return await this.userService.getUsers();
  }

  @Mutation(() => CreateUserRecipe, { name: 'createUser' })
  async createUser(
    @Args({ name: 'createUserInput' }) createUserInput: CreateUserInput,
  ): Promise<CreateUserRecipe> {
    return await this.userService.createUser(createUserInput);
  }
}
