import { IsArray, IsNumber } from 'class-validator';

export class Dto {
  @IsArray()
  @IsNumber({}, { each: true })
  arra: number[];
}
