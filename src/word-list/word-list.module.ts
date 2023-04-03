import { Module } from '@nestjs/common';
import { WordListService } from './word-list.service';
import { WordListController } from './word-list.controller';

@Module({
  controllers: [WordListController],
  providers: [WordListService]
})
export class WordListModule {}
