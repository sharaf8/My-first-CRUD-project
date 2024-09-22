import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  @Max(9)
  age: number;

  @IsOptional()
  @IsString()
  phone: string;
}
