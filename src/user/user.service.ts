import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/postgresql/entities/user.entity';
import {
  IUserRepository,
  I_USER_REPOSITORY,
} from 'src/postgresql/repositories/user.repository';
import { UserDTO } from './user.dto';

export const USER_TOKEN_SERVICE = 'USER MODULE USER_TOKEN_SERVICE';

@Injectable()
export class UserService {
  constructor(
    @Inject(I_USER_REPOSITORY)
    private userRepository: IUserRepository,
  ) {
    //
  }

  async get() {
    return await this.userRepository.getUsers();
  }

  async create(userDTO: UserDTO): Promise<UserEntity> {
    const newItem = this.userRepository.create(userDTO);

    return await newItem.save();
  }
}
