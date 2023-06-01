import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  setCookie(jwtToken: void, res: Response<any, Record<string, any>>) {
    throw new Error('Method not implemented.');
  }
  generateToken(arg0: { email: string }) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async login(loginDto: LoginDto): Promise<boolean> {
    const { email, password } = loginDto;
    const options: FindOneOptions<User> = { where: { email } };
    const user = await this.userRepository.findOne(options);
    return !!user && user.password === password;
  }

  // 나머지 메서드는 동일하게 유지
}
