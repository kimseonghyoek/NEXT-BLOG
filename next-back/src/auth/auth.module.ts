import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { UserService } from "src/user/user.service";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UserService],
})
export class AuthModule {}
