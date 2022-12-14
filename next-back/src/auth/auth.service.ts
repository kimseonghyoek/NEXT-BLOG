import { Injectable, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import e, { Response, response } from "express";
import {
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common/exceptions";
import { CreateUserDto } from "./dto/create-user.dto";
// import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  public async checkEmail(email: string) {
    const use_email = await this.userRepository.findOne({
      where: { email: email },
    });

    if (use_email) {
      throw new UnauthorizedException("use_this_email");
    }
  }

  public async checkNickname(name: string) {
    const use_name = await this.userRepository.findOne({
      where: { nickname: name },
    });

    if (use_name) {
      throw new UnauthorizedException("use_this_nickname");
    }
  }

  public async findAll() {
    return await this.userRepository.find();
  }

  public async createUser(createUserDto: CreateUserDto) {
    const { userEmail, userBirth, userName, userPw } = createUserDto;
    await this.checkEmail(userEmail);
    await this.checkNickname(userName);
    const password = await bcrypt.hash(userPw, 12);

    try {
      await this.userRepository.save({
        email: userEmail,
        birth: userBirth,
        nickname: userName,
        pw: password,
      });
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  // public async signIn(body) {
  //   const user = new User();
  //   const email = await this.checkEmail(body.body.email);
  //   const user_email = body.body.email;

  //   return user;
  // }
}
