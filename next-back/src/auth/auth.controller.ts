import { Body, Controller, Res } from "@nestjs/common";
import { Get, Post } from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import * as bcrypt from "bcrypt";
import { HttpCode, Request, UseGuards } from "@nestjs/common/decorators";
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "src/user/user.service";
import { LocalAuthenicationGuard } from "./local/localauthenication.guard";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

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
    return await this.userService.createUser(createUserDto);
  }

  @HttpCode(200)
  // @UseGuards(LocalAuthenicationGuard)
  @Post("/signin")
  async signin(@Body() data, @Request() req) {
    await this.authService.validateLogin(data.userEmail, data.userPw);
    return req.body;
  }
}
