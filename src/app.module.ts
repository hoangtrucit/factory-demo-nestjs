import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { RepositoriesModule } from './postgresql/repositories.module';
import { GraphModule } from './graphql/graphql.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    RepositoriesModule.forRoot({
      database: 'cod',
      host: 'localhost',
      port: 45321,
      username: 'postgres',
      password: 'pwd',
    }),
    GraphModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
