import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";

const fromAuthCookie = function () {
  return function (request) {
    let token = null;
    if (request && request.cookies) {
      token = request.cookies["Authorization"];
    }
    return token;
  };
};

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: ConfigService) {
    super({
      jwtFromRequest: fromAuthCookie,
      ignoreExpiration: false,
      secretOrKey: "jwt secret key",
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      username: payload.username,
      email: payload.email,
    };
  }
}
