import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth/signup/test')
export class AuthController {
  @Get()
  auth() {
    return console.log('asdfadsfasdf');
  }

  @Post()
  post() {
    return console.log('esatt');
  }
}
