import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  auth() {
    return 'This is Auth Page';
  }

  @Post()
  create(@Body() userId: number) {
    return console.log('데이터 들어옴');
  }
}
