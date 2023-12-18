import { Inject, Injectable } from '@nestjs/common';
import {
  I_POST_REPOSITORY,
  PostRepository,
} from 'src/postgresql/repositories/post.repository';

export const POST_TOKEN_SERVICE = '388305f4-85e9-4540-8282-9085127cfbaa';

@Injectable()
export class PostService {
  constructor(
    @Inject(I_POST_REPOSITORY)
    private postRepository: PostRepository,
  ) {}

  async get() {
    return await this.postRepository.findAll();
  }
}
