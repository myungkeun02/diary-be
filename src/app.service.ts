import { Injectable } from '@nestjs/common';
require('dotenv').config();

@Injectable()
export class AppService {
  getHello(): string {
    const a = process.env.GOOGLE_CLIENT_ID;
    const b = process.env.GOOGLE_SECRET;
    console.log(a, b);
    return 'diary';
  }
}
