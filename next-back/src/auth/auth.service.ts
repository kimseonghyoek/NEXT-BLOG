import { Injectable, NotFoundException } from '@nestjs/common';
import { Signup } from './entities/signup.entity';

@Injectable()
export class AuthService {
  private User: Signup[] = [];

  getOne(id: number): Signup {
    const user = this.User.find((one) => one.id === id);
    if (!user) {
      throw new NotFoundException(`NO User`);
    }
    return user;
  }
}
