import { Injectable, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import {
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common/exceptions";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  public async findAll() {
    return await this.userRepository.find();
  }

  public async issuedToken(user: any) {
    const payload = {
      username: user.nickname,
      email: user.email,
      sub: user.id,
    };
    return { access_token: this.jwtService.sign(payload) };
  }

  public async validateLogin(email: string, pw: string): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });
    if (user) {
      const match = await bcrypt.compare(pw, user.pw);
      if (match) {
        console.log(match);
      } else if (!match) {
        throw new UnauthorizedException("NOT_MATCH_PW");
      }
    } else if (user === null) {
      throw new UnauthorizedException("NOT_FOUND_EMAIL");
    }
    return user;
  }
}
