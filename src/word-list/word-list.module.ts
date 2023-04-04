import {Module} from '@nestjs/common';
import {WordListService} from './word-list.service';
import {WordListController} from './word-list.controller';
import {TypegooseModule} from 'nestjs-typegoose';
import {WordListModel} from './word-list.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: WordListModel,
        schemaOptions: {
          collection: 'WordList'
        }
      }
    ]),
  ],
  controllers: [WordListController],
  providers: [WordListService],
  exports: [WordListService]
})
export class WordListModule {
}
