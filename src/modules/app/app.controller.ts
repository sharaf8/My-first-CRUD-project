import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';


@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @ApiOperation({
    summary: 'Say hello to our app',
    description: 'This route can call all users',
  })
  @ApiOkResponse({
    type: String,
    description: 'Return hello from server',
  })
  @ApiBadRequestResponse({
    type: String,
    description: 'Your name is wrong!!!',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
