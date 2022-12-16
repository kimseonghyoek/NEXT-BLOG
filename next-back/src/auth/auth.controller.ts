import { Body, Controller, Res } from "@nestjs/common";
import { Get, Post } from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt";
import { Request, UseGuards } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  test() {
    const users = this.authService.findAll();
    console.log(users);
    return users;
  }

  @Get("/email-check")
  findEmail() {
    return "정상적으로 드감";
  }

  @Post("/signup")
  async signup(@Body() createUserDto: CreateUserDto) {
    return await this.authService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard("local"))
  @Post("/signin")
  async signin(@Body() data, @Request() req) {
    await this.authService.login(data.userEmail, data.userPw);
    console.log(req);
    return req.user;
  }
}
