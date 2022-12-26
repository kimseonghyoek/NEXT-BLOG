import { Body, Controller } from "@nestjs/common";
import { Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { HttpCode, Request, Res, UseGuards } from "@nestjs/common/decorators";
import { UserService } from "src/user/user.service";
import { LocalAuthenicationGuard } from "./local/localauthenication.guard";
import { Response } from "express";

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
  @UseGuards(LocalAuthenicationGuard)
  @Post("/signin")
  // Request는 user 객체로 날라옴.
  async signin(
    @Body() data,
    @Request() req,
    @Res({ passthrough: true }) res: Response
  ) {
    await this.authService.validateLogin(data.userEmail, data.userPw);
    // console.log(JSON.parse(JSON.stringify(req.user)));
    const access_token = await (
      await this.authService.issuedToken(req.user)
    ).access_token;
    res.cookie("Authorization", access_token, {
      domain: "localhost",
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });
    res.send({
      message: "success",
    });
    // return access_token;
  }
}
