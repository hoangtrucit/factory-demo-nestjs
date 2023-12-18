import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
  SelectQueryBuilder,
} from 'typeorm';
import * as pagination from 'nestjs-typeorm-paginate';
import { keys, set } from 'lodash';

export interface IRepository<Entity extends ObjectLiteral> {
  findById(id: number): Promise<Entity | null>;

  findAll(options?: FindManyOptions<Entity>): Promise<Entity[] | null>;

  create(doc: DeepPartial<Entity>): Promise<Entity | null>;

  updateById(id: number, doc: DeepPartial<Entity>): Promise<Entity | null>;

  getRepository(): Repository<Entity>;

  countBy(
    where: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
  ): Promise<number>;
}

export class AbstractRepository<Entity extends ObjectLiteral>
  implements IRepository<Entity>
{
  protected readonly repository: Repository<Entity>;

  constructor(baseRepository: Repository<Entity>) {
    this.repository = baseRepository;
  }

  async findOne(options: FindOneOptions<Entity>): Promise<Entity | null> {
    return await this.repository.findOne(options);
  }

  async findById(id): Promise<Entity | null> {
    return await this.repository.findOneBy({ id });
  }

  async findAll(options?: FindManyOptions<Entity>): Promise<Entity[]> {
    return await this.repository.find(options);
  }

  async findManyWithPagination(
    options: pagination.IPaginationOptions,
  ): Promise<pagination.Pagination<Entity>> {
    return pagination.paginate<Entity>(this.repository, options);
  }

  async paginateRaw<T>(
    selectQueryBuilder: SelectQueryBuilder<Entity>,
    options: pagination.IPaginationOptions,
  ): Promise<pagination.Pagination<Entity | T>> {
    return await pagination.paginateRaw(selectQueryBuilder, options);
  }

  async paginate(
    selectQueryBuilder: SelectQueryBuilder<Entity>,
    options: pagination.IPaginationOptions,
  ): Promise<pagination.Pagination<Entity>> {
    return pagination.paginate<Entity>(selectQueryBuilder, options);
  }

  async create(doc: DeepPartial<Entity>): Promise<Entity> {
    return await this.repository.create(doc);
  }

  async updateById(id: number, doc: DeepPartial<Entity>): Promise<Entity> {
    const foundInstance = await this.findById(id);

    keys(doc).forEach((key) => {
      set(foundInstance, key, doc[key]);
    });

    return await foundInstance.save();
  }

  async countBy(
    where: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[],
  ): Promise<number> {
    return await this.repository.countBy(where);
  }

  getRepository(): Repository<Entity> {
    return this.repository;
  }
}
