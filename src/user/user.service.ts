import { Inject, Injectable } from '@nestjs/common';
import {
  CreateUserRequest,
  USER_SERVICE_NAME,
  UserServiceClient,
} from '@share/protobuf/gRPC/generate/index.app.payment.user.service.v1';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { UserModel } from '@share/protobuf/gRPC/generate/index.app.payment.base.user.v1';

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

  async getUsers(): Promise<UserModel[]> {
    const result = await lastValueFrom(
      this.invoiceServiceClient.getUsers(null),
    );

    return result.users;
  }

  async createUser(request: CreateUserRequest): Promise<{ id: string }> {
    return await lastValueFrom(this.invoiceServiceClient.createUser(request));
  }
}
