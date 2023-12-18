import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { USER_TOKEN_SERVICE, UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(@Inject(USER_TOKEN_SERVICE) private userService: UserService) {}

  @Get('/v1')
  getUser() {
    return this.userService.get();
  }

  @Post('/v1')
  postUser(@Body() userDTO: UserDTO): string {
    console.log('🚀🚀🚀 file: app.controller.ts [line 21] ', userDTO);
    return;
  }
}
