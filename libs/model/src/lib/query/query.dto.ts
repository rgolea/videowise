import { IsNumber, IsOptional, IsPositive, Max, Min } from "class-validator";
import { Transform } from 'class-transformer';

export class QueryDTO {
  @IsNumber()
  @IsOptional()
  @IsPositive()
  @Max(100)
  @Transform(({
    value
  }) => value && parseInt(value) || 25)
  limit!: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Transform(({
    value
  }) => value && parseInt(value) || 0)
  skip!: number;
}
