import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { USER_TOKEN_SERVICE, UserService } from './user/user.service';
import { POST_TOKEN_SERVICE, PostService } from './post/post.service';
import { UserDTO } from './user/user.dto';

@Controller()
export class AppController {
  constructor(
    @Inject(USER_TOKEN_SERVICE) private userService: UserService,
    @Inject(POST_TOKEN_SERVICE) private postService: PostService,
  ) {}

  @Get('/user')
  getUser() {
    return this.userService.get();
  }

  @Post('/user')
  postUser(@Body() userDTO: UserDTO): string {
    console.log('🚀🚀🚀 file: app.controller.ts [line 21] ', userDTO);
    return;
  }

  @Get('/post')
  getPost() {
    return this.postService.get();
  }
}
