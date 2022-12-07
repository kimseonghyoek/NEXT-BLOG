import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import e, { Response, response } from 'express';
import { UnauthorizedException } from '@nestjs/common/exceptions';
// import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async checkEmail(email) {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });
    console.log(`==========${user}==========`);
    return user;
  }

  public async findAll() {
    return await this.userRepository.find();
  }

  // 나중에 타입 지정
  public async signUp(body) {
    const user = new User();
    user.id = body.body.id;
    user.email = body.body.email;
    user.birth = body.body.birth;
    user.nickname = body.body.nickname;
    const password = body.body.pw;
    const salt = 12;
    user.pw = await bcrypt.hash(password, salt);
    await this.userRepository.save(user);
  }
}
