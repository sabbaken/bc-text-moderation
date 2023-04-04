import {Injectable} from '@nestjs/common';
import {CreateWordListDto} from './dto/create-word-list.dto';
import {InjectModel} from 'nestjs-typegoose';
import {WordListModel} from './word-list.model';
import {ModelType} from '@typegoose/typegoose/lib/types';
import {DocumentType} from '@typegoose/typegoose';


@Injectable()
export class WordListService {
  constructor(
    @InjectModel(WordListModel) private readonly wordListModel: ModelType<WordListModel>
  ) {
  }

  create(createWordListDto: CreateWordListDto) {
    return this.wordListModel.create(createWordListDto);
  }

  getAll() {
    return this.wordListModel.find({});
  }

  getById(id: string) {
    return this.wordListModel.findById(id);
  }

  getByLanguage(language: string): Promise<DocumentType<WordListModel>[] | null> {
    return this.wordListModel.find({language: language}).exec();
  }

  update(id: string, updateWordListDto: CreateWordListDto) {
    return this.wordListModel.findByIdAndUpdate(id, updateWordListDto).exec();
  }

  remove(id: string) {
    return this.wordListModel.findByIdAndRemove(id).exec();
  }
}
