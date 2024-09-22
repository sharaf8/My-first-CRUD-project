import { Injectable } from '@nestjs/common';

@Injectable()
export class SumOfArrayService {
  getSumOfArray(array: number[]): number {
    return array.reduce((a, b) => a + b, 0);
  }
}
