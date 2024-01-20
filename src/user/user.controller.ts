import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { USER_TOKEN_SERVICE, UserService } from './user.service';
import { UserDTO, UserResponse } from './user.dto';
import { plainToInstance } from 'class-transformer';

@Controller('user')
export class UserController {
  constructor(@Inject(USER_TOKEN_SERVICE) private userService: UserService) {}

  @Get('/v1')
  getUser() {
    return this.userService.get();
  }

  @Post('/v1')
  async postUser(@Body() userDTO: UserDTO): Promise<UserResponse> {
    const result = await this.userService.create(userDTO);

    return plainToInstance(UserResponse, result);
  }
}
