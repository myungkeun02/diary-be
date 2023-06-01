import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { FindOneOptions } from 'typeorm';
import { LoginDto } from './dto/auth.dto';
import { User } from 'src/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const { email, password } = loginDto;
    const options: FindOneOptions<User> = { where: { email } };
    const pw: FindOneOptions<User> = { where: { password } };
    const isAuthenticated = await this.authService.login(options, pw);

    if (isAuthenticated) {
      const jwtToken = this.authService.generateToken({ email });
      await this.authService.setCookie(jwtToken, res);
      return res.send('로그인 성공');
    } else {
      return res.send('로그인 실패');
    }
  }
}
