import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { RepositoriesModule } from './postgresql/repositories.module';
import { GraphModule } from './graphql/graphql.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import rootConfiguration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [join(process.cwd(), 'env', `.env`)],
      load: [rootConfiguration],
    }),
    UserModule,
    PostModule,
    RepositoriesModule.forRoot({
      database: rootConfiguration().DB_DATABASE,
      host: rootConfiguration().DB_HOST,
      port: rootConfiguration().DB_PORT,
      username: rootConfiguration().DB_USERNAME,
      password: rootConfiguration().DB_PASSWORD,
    }),
    GraphModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
