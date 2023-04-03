import {Command} from 'nestjs-command';
import {Injectable} from '@nestjs/common';
import {WordListService} from './word-list.service';
import {wordListSeed} from '../seed/word-list.seed';

@Injectable()
export class BoardCommand {
  constructor(private readonly wordListService: WordListService) {
  }

  @Command({
    command: 'seed:boards',
    describe: 'seed db with boards',
  })
  async seed() {
    for (const wordList of wordListSeed) {
     await this.wordListService.create(wordList);
    }
  }
}