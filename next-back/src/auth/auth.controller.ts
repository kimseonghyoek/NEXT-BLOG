import { Body, Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  test() {
    const users = this.authService.findAll();
    console.log(users);
    return users;
  }

  @Get('/email-check')
  findEmail() {
    return '정상적으로 드감';
  }

  @Post('/signup')
  post(@Body() data) {
    this.authService.signUp(data);
  }
}
