import { Injectable } from '@nestjs/common';
require('dotenv').config();

@Injectable()
export class AppService {
  getHello(): string {
    console.log(
      "Hello world"
    );
    return 'diary';
  }
}
