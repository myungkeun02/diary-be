// 로그인 : id / password
// 회원가입 : id / password / password_validation

export class LoginDto {
  id: string;
  password: string;
}

export class SignupDto {
  id: string;
  password: string;
  password_validation: string;
}
