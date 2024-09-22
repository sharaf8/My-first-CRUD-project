import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './services/type.service';
import { SumOfArrayService } from './services/sum-of-array.service';

@Module({
  controllers: [TypeController],
  providers: [TypeService, SumOfArrayService],
})
export class TypeModule {}
