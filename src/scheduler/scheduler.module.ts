import {Module} from '@nestjs/common';
import {SchedulerController} from './scheduler.controller';

@Module({
  controllers: [SchedulerController],
  imports: []
})
export class SchedulerModule {
}
