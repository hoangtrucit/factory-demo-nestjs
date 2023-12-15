import { Inject, Injectable } from '@nestjs/common';
import {
  I_POST_REPOSITORY,
  PostRepository,
} from 'src/postgresql/repositories/post.repository';

export const POST_TOKEN_SERVICE = 'POST_TOKEN_SERVICE';

@Injectable()
export class PostService {
  constructor(
    @Inject(I_POST_REPOSITORY)
    private postRepository: PostRepository,
  ) {
    //
  }

  async get() {
    return await this.postRepository.findAll();
  }
}
