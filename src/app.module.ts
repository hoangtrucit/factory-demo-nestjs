import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { RepositoriesModule } from './postgresql/repositories.module';
import { GraphModule } from './graphql/graphql.module';

@Module({
  imports: [
    UserModule,
    PostModule,
    RepositoriesModule.forRoot({
      database: 'test',
      host: 'localhost',
      port: 54321,
      username: 'postgres',
      password: 'pwd',
    }),
    GraphModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
