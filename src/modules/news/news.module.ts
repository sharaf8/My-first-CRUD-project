import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './services/news.service';
import { NewsYesterdayService } from './services/news-yesterday.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService, NewsYesterdayService],
})
export class NewsModule {}
