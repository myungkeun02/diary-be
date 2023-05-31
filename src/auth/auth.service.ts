import { Injectable } from '@nestjs/common';
import { Response } from 'express';

const users = [
  {
    id: 'admin',
    password: 'admin',
  },
  {
    id: 'test',
    password: 'test',
  },
];

@Injectable()
export class AuthService {
  login(id: string, password: string): boolean {
    if (users.find((user) => user.id === id && user.password === password)) {
      return true;
    }
    return false;
  }

  generateToken(data): string {
    // generate JWT
    return 'token';
  }

  async setCookie(jwt: string, res: Response) {
    res.cookie('jwt', jwt, { httpOnly: true });
  }

  async removeCookie(res: Response) {
    res.cookie('jwt', '', { httpOnly: true });
  }
}
