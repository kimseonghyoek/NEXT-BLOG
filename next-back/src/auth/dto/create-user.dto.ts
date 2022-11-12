import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  public email: string;

  @IsString()
  public nickname: string;

  @IsNumber()
  public birth: string;

  @IsString()
  public pw: string;
}
