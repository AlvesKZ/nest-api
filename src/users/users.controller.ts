import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersservice: UsersService) {}

  @Post()
  create(@Body() user: UserDto): void {
    this.usersservice.create(user);
    return;
  }
}
