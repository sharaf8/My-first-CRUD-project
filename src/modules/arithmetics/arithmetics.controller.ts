import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SumService } from './operations/sum.service';
import { MinService } from './operations/min.service';

@ApiTags('Arithmetics')
@Controller('arithmetics')
export class ArithmeticsController {
  constructor(
    readonly sum: SumService,
    readonly min: MinService,
  ) {}
  @Get('operations')
  @ApiOperation({
    summary: 'Sum of two numbers.',
    description: 'Enter two numbers and get their sum.',
  })
  @ApiOkResponse({
    type: Number,
    description: 'function worked successfully',
  })
  @ApiBadRequestResponse({
    type: Number,
    description: 'The server is off',
  })
  getSum(@Query('a') a: number, @Query('b') b: number) {
    return this.sum.sum(+a, +b);
  }
  @Get('operations/minus')
  @ApiOperation({
    summary: 'subtraction of two numbers.',
    description: 'Enter two numbers and get their subtraction.',
  })
  @ApiOkResponse({
    type: Number,
    description: 'function worked successfully',
  })
  @ApiBadRequestResponse({
    type: Number,
    description: 'The server is off',
  })
  getSubtraction(@Query('a') a: number, @Query('b') b: number) {
    return this.min.minus(+a, +b);
  }
}
