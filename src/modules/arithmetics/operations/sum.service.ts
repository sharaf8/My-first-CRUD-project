import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {
  sum(a, b) {
    return a + b;
  }
}
