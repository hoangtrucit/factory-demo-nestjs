import { Injectable } from '@nestjs/common';

export const USER_TOKEN_SERVICE = 'USER MODULE USER_TOKEN_SERVICE';

@Injectable()
export class UserService {
  get(): string {
    return 'get user function';
  }
}
