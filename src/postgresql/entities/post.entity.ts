// Libs importing
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IUserEntity, UserEntity } from './user.entity';

export interface IPostEntity {
  id: string;
  title: string;
}

@Entity({ name: 'post' })
export class PostEntity implements IPostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'uuid', name: 'created_by' })
  createdBy: string;

  @ManyToMany(() => UserEntity, (item) => item.posts)
  @JoinTable({
    name: 'post_like',
    joinColumn: {
      name: 'post_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  users: IUserEntity[];
}
