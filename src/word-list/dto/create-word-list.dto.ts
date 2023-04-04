import {IsArray, IsOptional, IsString} from 'class-validator';

export class CreateWordListDto {
  @IsOptional()
  @IsString()
  _id?: string;

  @IsString()
  name: string;

  @IsString()
  language: string;

  @IsArray()
  @IsString({each: true})
  items: string[];
}
