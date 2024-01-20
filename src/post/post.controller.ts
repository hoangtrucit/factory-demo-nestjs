import { Controller, Get, Inject } from '@nestjs/common';
import { POST_TOKEN_SERVICE, PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(@Inject(POST_TOKEN_SERVICE) private postService: PostService) {
    //
  }

  @Get('/v1')
  getPost() {
    return this.postService.get();
  }
}
