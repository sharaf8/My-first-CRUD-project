import { Controller, Get } from '@nestjs/common';
import { NewsService } from './services/news.service';
import { NewsYesterdayService } from './services/news-yesterday.service';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(
    private readonly today: NewsService,
    private readonly yesterday: NewsYesterdayService,
  ) {}
  @Get('today')
  @ApiOperation({
    summary: 'What i do today',
    description: 'If you want to know what i do today',
  })
  @ApiOkResponse({
    type: String,
    description: 'You will get the result!',
  })
  @ApiBadRequestResponse({
    type: String,
    description: 'Yeeeeessss!',
  })
  todayNews() {
    return this.today.iGo();
  }

  @Get('yesterday')
  @ApiOperation({
    summary: 'What i did yesterday',
    description: 'If you want to know what i did yesterday',
  })
  @ApiOkResponse({
    type: String,
    description: 'You will get the result!',
  })
  @ApiBadRequestResponse({
    type: String,
    description: 'Noooooooo!',
  })
  yesterdayNews() {
    return this.yesterday.iWent();
  }
}
