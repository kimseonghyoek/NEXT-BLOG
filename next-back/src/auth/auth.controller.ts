import { Body, Controller, Res } from "@nestjs/common";
import { Get, Post } from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt";

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

  // @Post("/signin")
  // async signin(@Body() data, @Res() res: Response) {}
}
