import {IsArray, IsString} from 'class-validator';

export class CreateWordListDto {
  @IsString()
  name: string;

  @IsString()
  language: string;

  @IsArray()
  @IsString({each: true})
  items: string[];
}
