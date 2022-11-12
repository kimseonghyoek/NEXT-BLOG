import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  signUp(body: CreateUserDto) {
    return console.log(body);
  }
}
