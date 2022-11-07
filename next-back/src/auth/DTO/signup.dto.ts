import { IsEmail, IsNumber, IsString } from 'class-validator';

export class SignupDto {
  @IsEmail()
  readonly email: string;

  @IsNumber()
  readonly birth: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly pw: string;
}
