import { Controller, Get } from '@nestjs/common';
import { CustomException } from './custom.exception';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    throw new CustomException();
  }
}
