import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsEmail()
  public userEmail: string;

  @IsString()
  public userName: string;

  @IsString()
  public userBirth: number;

  @IsString()
  public userPw: string;
}
