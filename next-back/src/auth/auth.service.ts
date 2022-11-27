import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { response } from 'express';
// import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async checkEmail(body) {
    const user = await this.userRepository.findOne({
      where: { email: body },
    });
    return user !== undefined;
  }

  // 나중에 타입 지정
  public async signUp(body) {
    const user = new User();
    user.id = body.body.id;
    user.email = body.body.email;
    const checkEmail = await this.checkEmail(body.body.email);
    if (checkEmail) {
      console.log('이메일 중복이다');
    }
    user.birth = body.body.birth;
    user.nickname = body.body.nickname;
    const password = body.body.pw;
    const salt = 12;
    user.pw = await bcrypt.hash(password, salt);
    await this.userRepository.save(user);
  }
}
