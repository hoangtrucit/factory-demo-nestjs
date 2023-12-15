import { Inject, Injectable } from '@nestjs/common';
import {
  I_USER_REPOSITORY,
  UserRepository,
} from 'src/postgresql/repositories/user.repository';

export const USER_TOKEN_SERVICE = 'USER MODULE USER_TOKEN_SERVICE';

@Injectable()
export class UserService {
  constructor(
    @Inject(I_USER_REPOSITORY)
    private userRepository: UserRepository,
  ) {
    //
  }

  async get() {
    return await this.userRepository.findAll({
      relations: {
        posts: true,
      },
    });
  }
}
