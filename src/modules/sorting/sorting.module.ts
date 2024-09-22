import { Module } from '@nestjs/common';
import { SortingController } from './sorting.controller';
import { EvenSortingService } from './services/even-sorting.service';
import { OddSortingService } from './services/odd-sorting.service';

@Module({
  controllers: [SortingController],
  providers: [EvenSortingService, OddSortingService],
})
export class SortingModule {}
