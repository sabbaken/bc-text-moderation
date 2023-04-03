import { PartialType } from '@nestjs/mapped-types';
import { CreateWordListDto } from './create-word-list.dto';

export class UpdateWordListDto extends PartialType(CreateWordListDto) {}
