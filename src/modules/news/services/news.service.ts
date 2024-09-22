import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  iGo() {
    return 'I go to school';
  }
}