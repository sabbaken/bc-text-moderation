import {prop} from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';

export interface WordListModel extends Base {
}

export class WordListModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  language: string;

  @prop({type: () => [String]})
  items: string[];
}

