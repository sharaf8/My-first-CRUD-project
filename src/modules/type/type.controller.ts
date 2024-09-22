import { Post, Body, Controller, Get, Query } from '@nestjs/common';
import { TypeService } from './services/type.service';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { SumOfArrayService } from './services/sum-of-array.service';
import { CreateSumDto } from './dto/create-sum.dto'; // Иловакунӣ кардани DTO

@Controller('type')
export class TypeController {
  constructor(
    private readonly type: TypeService,
    private readonly sum: SumOfArrayService,
  ) {}

  @ApiTags('type and sum of array')
  @Get('services')
  @ApiOperation({
    summary: 'Type returner.',
    description: 'Get the type of parameters',
  })
  @ApiOkResponse({
    type: String,
    isArray: true,
    description: 'Return the type of the parameter.',
  })
  @ApiBadRequestResponse({
    description: 'The server is off.',
  })
  @ApiQuery({
    name: 'paramether',
    required: true,
    type: String,
  })
  getType(@Query('paramether') paramether: any) {
    return this.type.getTypes(paramether);
  }

  @ApiTags('type and sum of array')
  @Post('sum-of-array')
  @ApiOperation({
    summary: 'Sum of array.',
    description: 'Get the sum of an array',
  })
  @ApiOkResponse({
    type: Number,
    description: 'The sum of all array numbers.',
  })
  @ApiBadRequestResponse({
    description: 'The server is off.',
  })
  @ApiBody({ type: CreateSumDto })
  getSum(@Body() createSumDto: CreateSumDto) {
    return this.sum.getSumOfArray(createSumDto.arr);
  }
}
