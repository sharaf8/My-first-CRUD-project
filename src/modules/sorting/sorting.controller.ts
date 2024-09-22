import { Post, Body, Controller } from '@nestjs/common';
import { OddSortingService } from './services/odd-sorting.service';
import { EvenSortingService } from './services/even-sorting.service';
import { Dto } from '../sorting/dto/dto';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';

@Controller('sorting')
@ApiTags('Sorting Arrays') // Moved ApiTags to the class level for consistency
export class SortingController {
  constructor(
    private readonly odd: OddSortingService,
    private readonly even: EvenSortingService,
  ) {}

  @Post('services/odd-sorting')
  @ApiOperation({
    summary: 'Odd numbers',
    description: 'Get the odd numbers from an array.',
  })
  @ApiOkResponse({
    type: Number,
    isArray: true,
    description: 'There are the odd numbers.',
  })
  @ApiBadRequestResponse({
    description: 'Input must be an array of numbers.',
  })
  @ApiBody({ type: Dto })
  getOddNumbers(@Body() arr: Dto) {
    const numArray = arr.arra;
    return this.odd.getOdd(numArray);
  }

  @Post('services/even-sorting')
  @ApiOperation({
    summary: 'Even numbers',
    description: 'Get the even numbers from an array.',
  })
  @ApiOkResponse({
    type: Number,
    isArray: true,
    description: 'There are the even numbers.',
  })
  @ApiBadRequestResponse({
    description: 'Input must be an array of numbers.',
  })
  @ApiBody({ type: Dto })
  getEvenNumbers(@Body() arr: Dto) {
    const numArray = arr.arra;
    return this.even.getEven(numArray);
  }
}
