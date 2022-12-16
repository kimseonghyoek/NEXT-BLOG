import { UnauthorizedException } from "@nestjs/common";
import { Body, Injectable } from "@nestjs/common/decorators";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Payload } from "../security/payload.interface";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, pw: string): Promise<any> {
    const user = await this.authService.login(email, pw);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
