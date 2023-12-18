import { Module } from '@nestjs/common';
import { POST_TOKEN_SERVICE, PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [
    {
      provide: POST_TOKEN_SERVICE,
      useClass: PostService,
    },
  ],
  exports: [POST_TOKEN_SERVICE],
})
export class PostModule {}
