import { IsEmail, IsString } from "class-validator";

export class LoginUserDto {
  @IsString()
  @IsEmail()
  public userEmail: string;

  @IsString()
  public userPw: string;
}
