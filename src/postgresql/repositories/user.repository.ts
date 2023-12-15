// Libs importing
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';

import { AbstractRepository, IRepository } from './abstract.repository';
import { UserEntity } from '../entities';
import { IUserEntity } from '../entities/user.entity';

export const I_USER_REPOSITORY = 'I_USER_REPOSITORY';

export interface IUserRepository<Entity extends ObjectLiteral>
  extends IRepository<Entity> {
  //
}

@Injectable()
export class UserRepository
  extends AbstractRepository<UserEntity>
  implements IUserRepository<IUserEntity>
{
  constructor(
    @InjectRepository(UserEntity)
    repository: Repository<UserEntity>,
  ) {
    super(repository);
  }
}
