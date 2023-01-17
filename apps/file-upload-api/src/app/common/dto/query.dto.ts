import { IsInt, IsOptional, IsPositive, Max } from "class-validator";
import { Transform } from 'class-transformer';

export class QueryDTO {
  @IsInt()
  @IsOptional()
  @IsPositive()
  @Max(100)
  @Transform(({
    value
  }) => value || 25)
  limit: number;

  @IsInt()
  @IsOptional()
  @IsPositive()
  @Transform(({
    value
  }) => value || 0)
  skip: number;
}
