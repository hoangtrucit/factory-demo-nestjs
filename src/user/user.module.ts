import { Module } from '@nestjs/common';
import { USER_TOKEN_SERVICE, UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule } from '@nestjs/microservices';
import { clientsModuleOptions } from './user.grpc.setup';

@Module({
  imports: [ClientsModule.register(clientsModuleOptions)],
  controllers: [UserController],
  providers: [
    {
      provide: USER_TOKEN_SERVICE,
      useClass: UserService,
    },
  ],
  exports: [USER_TOKEN_SERVICE],
})
export class UserModule {}
