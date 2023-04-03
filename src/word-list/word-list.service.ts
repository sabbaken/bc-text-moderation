import { Injectable } from '@nestjs/common';
import { CreateWordListDto } from './dto/create-word-list.dto';
import { UpdateWordListDto } from './dto/update-word-list.dto';

@Injectable()
export class WordListService {
  create(createWordListDto: CreateWordListDto) {
    return 'This action adds a new wordList';
  }

  findAll() {
    return `This action returns all wordList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wordList`;
  }

  update(id: number, updateWordListDto: UpdateWordListDto) {
    return `This action updates a #${id} wordList`;
  }

  remove(id: number) {
    return `This action removes a #${id} wordList`;
  }
}
