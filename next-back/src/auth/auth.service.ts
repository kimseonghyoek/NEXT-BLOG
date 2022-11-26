import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // 나중에 타입 지정
  public async signUp(body) {
    const user = new User();
    console.log('====log====');
    user.id = body.body.id;
    user.email = body.body.email;
    user.birth = body.body.birth;
    user.nickname = body.body.nickname;
    user.pw = body.body.pw;
    await this.userRepository.save(user);
  }
}
