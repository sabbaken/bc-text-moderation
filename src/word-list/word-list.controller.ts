import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WordListService } from './word-list.service';
import { CreateWordListDto } from './dto/create-word-list.dto';
import { UpdateWordListDto } from './dto/update-word-list.dto';

@Controller('word-list')
export class WordListController {
  constructor(private readonly wordListService: WordListService) {}

  @Post()
  create(@Body() createWordListDto: CreateWordListDto) {
    return this.wordListService.create(createWordListDto);
  }

  @Get()
  findAll() {
    return this.wordListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wordListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWordListDto: UpdateWordListDto) {
    return this.wordListService.update(+id, updateWordListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wordListService.remove(+id);
  }
}
