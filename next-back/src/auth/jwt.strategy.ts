import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          return request?.cookies?.Authorization;
        },
      ]),
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
