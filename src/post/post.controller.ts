import { Controller, Get, Inject } from '@nestjs/common';
import { POST_TOKEN_SERVICE, PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(@Inject(POST_TOKEN_SERVICE) private postService: PostService) {
    console.log('🚀🚀🚀 file: post.controller.ts [line 7] ', this.postService);
  }

  @Get('/v1')
  getPost() {
    return this.postService.get();
  }
}
