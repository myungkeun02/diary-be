import {
  Body,
  Controller,
  Post,
  Redirect,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 로그인
  @Post('login')
  async authLogin(@Body() body: LoginDto, @Res() res: Response): Promise<any> {
    const { id, password } = body;

    const result = this.authService.login(id, password);

    if (result) {
      const jwt = this.authService.generateToken({ id });
      await this.authService.setCookie(jwt, res);
      Redirect('/Blog');
    } else {
      throw new UnauthorizedException('아이디 또는 비밀번호가 틀렸습니다.');
    }
  }

  // 로그아웃
  @Post('logout')
  async authLogout(@Res() res: Response): Promise<void> {
    await this.authService.removeCookie(res);
  }

  // 회원가입
  @Post('signup')
  async authSignup(): Promise<string> {
    return 'Main Page!';
  }
}
