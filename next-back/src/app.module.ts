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
import { LocalStrategy } from "./auth/local/local.strategy";

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
    JwtModule.register({
      secret: "SECRET",
      signOptions: { expiresIn: "300s" },
    }),
    AuthModule,
    PassportModule,
  ],
  controllers: [AppController, AuthController],
  providers: [App, AuthService, LocalStrategy],
})
export class AppModule {}
