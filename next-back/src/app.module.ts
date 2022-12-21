import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { App } from "./app";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { AuthModule } from "./auth/auth.module";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./auth/local.strategy";
import { UserService } from "./user/user.service";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3308,
      username: "root",
      password: "sad123",
      database: "NEXTB",
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    AuthModule,
    UserModule,
    PassportModule,
  ],
  controllers: [AppController, AuthController],
  providers: [App, AuthService, UserService, LocalStrategy],
})
export class AppModule {}
