import {IsArray, IsBoolean, IsObject, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';

export class ModerationItemDto {
  @IsObject()
  textFields: Object;
  // text: string
  // title: string
  // username: string
}

export class ModerationOptionsDto {
  @IsBoolean()
  wordList: boolean;
}

export class ModerateAllDto {
  @Type(() => ModerationOptionsDto)
  moderationOptions: ModerationOptionsDto;

  @IsArray()
  @ValidateNested()
  @Type(() => ModerationItemDto)
  items: ModerationItemDto[];

  @IsString()
  language: string;
}
