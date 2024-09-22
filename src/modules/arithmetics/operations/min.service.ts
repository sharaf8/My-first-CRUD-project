import { Injectable } from '@nestjs/common';

@Injectable()
export class MinService {
  minus(a, b) {
    return a - b;
  }
}
