import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getTest(): string {
    return 'This is Test';
  }
}
