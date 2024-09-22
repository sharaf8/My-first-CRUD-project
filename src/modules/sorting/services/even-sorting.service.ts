import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class EvenSortingService {
  getEven(array: any[]): number[] {
    if (!Array.isArray(array)) {
      throw new BadRequestException('Input must be an array');
    }

    return array.filter((num) => typeof num === 'number' && num % 2 === 0);
  }
}
