import { Body, Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  test() {
    return 'test!!!';
  }

  @Post()
  post(@Body() data) {
    this.authService.signUp(data);
  }
}
