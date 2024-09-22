import { IsArray, IsNumber } from 'class-validator';

export class CreateSumDto {
  @IsArray()
  @IsNumber({}, { each: true })
  arr: number[];
}
