import { Controller, Get, Inject } from '@nestjs/common';
import { USER_TOKEN_SERVICE, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(@Inject(USER_TOKEN_SERVICE) private userService: UserService) {}

  @Get('/v1')
  async getUser() {
    return await this.userService.getUsers();
  }
}
