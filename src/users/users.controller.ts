import { Controller, Post } from '@nestjs/common';

@Controller()
export class UsersController {
  @Post('signup')
  signUp(): string {
    return 'This action register a new user';
  }
}
