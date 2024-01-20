import { Controller, Get, Inject } from '@nestjs/common';
import { USER_TOKEN_SERVICE, UserService } from './user/user.service';
import { POST_TOKEN_SERVICE, PostService } from './post/post.service';

@Controller()
export class AppController {
  constructor(
    @Inject(USER_TOKEN_SERVICE) private userService: UserService,
    @Inject(POST_TOKEN_SERVICE) private postService: PostService,
  ) {}

  @Get('/user')
  getUser() {
    return this.userService.getUsers();
  }
}
