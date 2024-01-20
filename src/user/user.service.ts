import { Inject, Injectable } from '@nestjs/common';
import {
  USER_SERVICE_NAME,
  UserServiceClient,
} from '@share/protobuf/gRPC/generate/index.app.payment.user.service.v1';
import { ClientGrpc } from '@nestjs/microservices';

export const USER_TOKEN_SERVICE = 'USER MODULE USER_TOKEN_SERVICE';

@Injectable()
export class UserService {
  private invoiceServiceClient: UserServiceClient;

  constructor(
    @Inject(USER_SERVICE_NAME)
    private client: ClientGrpc,
  ) {
    this.invoiceServiceClient =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  async getUsers() {
    return await this.invoiceServiceClient.getUsers(null);
  }
}
