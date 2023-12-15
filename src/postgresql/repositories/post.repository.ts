// Libs importing
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';

import { AbstractRepository, IRepository } from './abstract.repository';
import { PostEntity } from '../entities';
import { IPostEntity } from '../entities/post.entity';

export const I_POST_REPOSITORY = 'I_POST_REPOSITORY';

export interface IPostRepository<Entity extends ObjectLiteral>
  extends IRepository<Entity> {
  //
}

@Injectable()
export class PostRepository
  extends AbstractRepository<PostEntity>
  implements IPostRepository<IPostEntity>
{
  constructor(
    @InjectRepository(PostEntity)
    repository: Repository<PostEntity>,
  ) {
    super(repository);
  }
}
