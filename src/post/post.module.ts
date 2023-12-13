import { Module } from '@nestjs/common';
import { POST_TOKEN_SERVICE, PostService } from './post.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: POST_TOKEN_SERVICE,
      useClass: PostService,
    },
  ],
  exports: [POST_TOKEN_SERVICE],
})
export class PostModule {}
