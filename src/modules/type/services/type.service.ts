import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeService {
  getTypes(types: any): string {
    try {
      types = JSON.parse(types);
    } catch (error) {}
    if (types === null) {
      return 'null';
    }

    switch (typeof types) {
      case 'string':
        return 'string';
      case 'object':
        return 'object';
      case 'boolean':
        return 'boolean';
      case 'number':
        return 'number';
      case 'symbol':
        return 'symbol';
      case 'undefined':
        return 'undefined';
      case 'bigint':
        return 'bigint';
      default:
        return 'any';
    }
  }
}
