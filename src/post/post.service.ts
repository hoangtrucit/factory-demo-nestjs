import { Injectable } from '@nestjs/common';

export const POST_TOKEN_SERVICE = 'POST_TOKEN_SERVICE';

@Injectable()
export class PostService {
  get(): string {
    return 'get post function';
  }
}
