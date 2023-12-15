import { BaseEntity, Column } from 'typeorm';

export abstract class AbstractEntity<Entity> extends BaseEntity {
  @Column({ type: 'uuid', name: 'created_by' })
  createdBy: string;

  constructor(partial?: Partial<Entity>) {
    super();
    if (partial) Object.assign(this, partial);
  }
}
