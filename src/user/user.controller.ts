import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {
    //
  }

  @Get('/user')
  getUser(): string {
    return 'abc';
  }
}
