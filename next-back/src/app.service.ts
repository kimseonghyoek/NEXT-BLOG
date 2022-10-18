import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hellos!';
  }

  getTest(): string {
    return 'TEST!!!';
  }
}
