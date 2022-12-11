import { Body, Controller, Res } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

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
  async signup(@Body() data, @Res() res: Response) {
    console.log(`---${data.body.email}---`);
    const user = await this.authService.checkEmail(data.body.email);
    console.log(user);
    if (user === null) {
      this.authService.signUp(data);
      return res.status(200).send('save_user');
    } else {
      return res.status(403).send('have_user');
    }
  }

  @Post('/signin')
  async signin(@Body() data, @Res() res: Response) {
    const userdata = await this.authService.signIn(data);
    const email = await this.authService.checkEmail(data.body.email);
    if (email === null) {
      console.log('존재하지 않는 이메일입니다.');
    } else if (email.email === userdata.email) {
      // 이메일 같음
      console.log(`--${email.pw}--`);
      const user_pw = data.body.pw;
      const match = await bcrypt.compare(user_pw, email.pw);
      if (match) {
        res.status(200).send('pass');
      }
      console.log(data.body);
    }
  }
}
