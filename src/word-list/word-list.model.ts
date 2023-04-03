import {prop} from '@typegoose/typegoose';
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';


export interface WordListModel extends Base {
}

export class WordListModel extends TimeStamps {
  @prop({unique: true})
  name: string;

  @prop()
  language: string;

  @prop()
  items: string[];
}
