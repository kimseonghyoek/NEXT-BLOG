import { Controller, Get, Post } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  home() {
    return "Welcome";
  }

  @Post()
  tes() {
    return console.log("tester");
  }
}
