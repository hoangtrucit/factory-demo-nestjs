import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

import { SnakeNamingStrategy } from './naming.strategy';

export const getTypeOrmConfig = (
  configService: ConfigService
): DataSourceOptions & TypeOrmModuleOptions => {
  return {
    entities: [__dirname + '/../entities/*{.ts,.js}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    migrationsRun: false,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
    migrationsTransactionMode: 'each',
    synchronize: false,
  };
};

export const AppDataSource = new DataSource({
  entities: [__dirname + '/../entities/*{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrationsRun: false,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
  migrationsTableName: 'migrations_table',
  migrationsTransactionMode: 'each',
  synchronize: false,
});
