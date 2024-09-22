import { Post, Controller, Delete, Get, Param, Body } from '@nestjs/common';
import { AllUsersService } from './services/allUsers.service';
import { UserService } from './services/user.service';
import { CreateUserDto } from './dto/CreateUserDto';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    private readonly allUsersService: AllUsersService,
    private readonly userService: UserService,
  ) {}

  @Get('get-all-users')
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ description: 'A list of all users.' })
  @ApiBadRequestResponse({ description: 'Server error or bad request.' })
  getAllUsers() {
    return this.allUsersService.getUsers();
  }

  @Get('get-first-user')
  @ApiOperation({ summary: 'Get first user' })
  @ApiOkResponse({ description: 'The first user.' })
  @ApiBadRequestResponse({ description: 'Server error or bad request.' })
  getFirstUser() {
    return this.userService.firstUser();
  }
  @Post()
  @ApiOperation({ summary: 'Add a new user' })
  @ApiOkResponse({ description: 'User added successfully.' })
  @ApiBadRequestResponse({
    description: 'Validation failed or user already exists.',
  })
  addUser(@Body() createUserDto: CreateUserDto) {
    return this.allUsersService.addUser(createUserDto);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Remove a user by ID' })
  @ApiOkResponse({ description: 'User removed successfully.' })
  @ApiBadRequestResponse({ description: 'User not found.' })
  remove(@Param('id') id: string) {
    return this.allUsersService.remove(id);
  }
}
