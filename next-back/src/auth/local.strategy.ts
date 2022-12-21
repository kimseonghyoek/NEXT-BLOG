import { UnauthorizedException } from "@nestjs/common";
import { Body, Injectable } from "@nestjs/common/decorators";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { Local } from "./local/local.interface";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: "userEmail",
    });
  }

  async validate(email: string, pw: string): Promise<any> {
    const user = await this.authService.validateLogin(email, pw);
    console.log(user);
    if (!user) {
      throw new UnauthorizedException("local error");
    }
    console.log(user);
    return user;
  }
}
