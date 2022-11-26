import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  public id: number;

  @IsString()
  @IsEmail()
  public email: string;

  @IsString()
  public nickname: string;

  @IsNumber()
  public birth: number;

  @IsString()
  public pw: string;
}
