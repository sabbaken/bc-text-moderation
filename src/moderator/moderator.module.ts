import { Module } from '@nestjs/common';
import { ModeratorController } from './moderator.controller';
import { ModeratorService } from './moderator.service';
import {WordListModule} from '../word-list/word-list.module';

@Module({
  imports: [
    WordListModule
  ],
  controllers: [ModeratorController],
  providers: [ModeratorService]
})
export class ModeratorModule {}
