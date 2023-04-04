import {Command} from 'nestjs-command';
import {Injectable} from '@nestjs/common';
import {WordListService} from './word-list.service';
import {WordListSeed} from '../seed/word-list.seed';

@Injectable()
export class WordListCommand {
  constructor(private readonly wordListService: WordListService) {
  }

  @Command({
    command: 'seed:word-list',
    describe: 'seed db with WordList',
  })
  async seed() {
    for (const wordList of WordListSeed) {
     await this.wordListService.create(wordList);
    }
  }
}