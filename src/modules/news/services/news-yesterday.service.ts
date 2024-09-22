import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsYesterdayService {
  iWent() {
    return 'I went to school Yesterday';
  }
}
