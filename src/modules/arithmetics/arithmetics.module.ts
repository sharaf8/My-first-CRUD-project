import { Module } from '@nestjs/common';
import { ArithmeticsController } from './arithmetics.controller';
import { MinService } from './operations/min.service';
import { SumService } from './operations/sum.service';

@Module({
  controllers: [ArithmeticsController],
  providers: [MinService, SumService],
})
export class ArithmeticsModule {}
