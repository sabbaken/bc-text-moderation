import {Body, Controller, Post} from '@nestjs/common';
import {ModerateAllDto} from './dto/moderate-all.dto';
import {ModeratorService} from './moderator.service';

@Controller('moderator')
export class ModeratorController {
  constructor(private readonly moderatorService: ModeratorService) {
  }

  @Post('/moderate-all')
  async create(@Body() dto: ModerateAllDto) {
    return this.moderatorService.moderateAll(dto);
  }
}
