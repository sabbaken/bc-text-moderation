import {Injectable} from '@nestjs/common';
import {ModerateAllDto, ModerationItemDto, ModerationOptionsDto} from './dto/moderate-all.dto';
import {WordListModel} from '../word-list/word-list.model';
import {WordListService} from '../word-list/word-list.service';
import {DocumentType} from '@typegoose/typegoose';

@Injectable()
export class ModeratorService {
  constructor(
    private readonly wordListService: WordListService,
  ) {
  }

  async moderateAll(dto: ModerateAllDto): Promise<unknown> {
    const moderatedItems = await Promise.all(dto.items.map(async (item) => ({
      ...item,
      isAcceptable: await this.moderate(item, dto.moderationOptions, dto.language),
    })));
    return {...dto, items: moderatedItems};
  }

  private async moderate(itemDto: ModerationItemDto, optionsDto: ModerationOptionsDto, language: string): Promise<boolean> {
    if (optionsDto.wordList) {
      const wordListDocs = await this.wordListService.getByLanguage(language);
      if (wordListDocs) {
        return this.moderateByWordList(itemDto, wordListDocs);
      }
    }
    return true;
  }

  private async moderateByWordList(itemDto: ModerationItemDto, wordLists: DocumentType<WordListModel>[]): Promise<any> {
    for (const wordList of wordLists) {
      for (const field of Object.values(itemDto.textFields)) {
        const sanitizedField = this.sanitizeText(field);
        for (const word of wordList.items) {
          if (sanitizedField.includes(word.toLowerCase())) {
            return false;
          }
        }
      }
    }
    return true;
  }

  private sanitizeText(str: string) {
    return str
      .toLowerCase()
      .replace(/[.*+?^${}()|\[\]\\]/g, '')
      .trim();
  }
}
