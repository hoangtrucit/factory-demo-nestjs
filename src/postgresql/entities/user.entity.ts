// Libs importing
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IPostEntity, PostEntity } from './post.entity';

export interface IUserEntity {
  id: string;
  email: string;
}

@Entity({ name: 'user' })
export class UserEntity implements IUserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'email' })
  email: string;

  @ManyToMany(() => PostEntity, (item) => item.users)
  posts: IPostEntity[];
}
