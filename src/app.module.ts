import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypegooseModule} from 'nestjs-typegoose';
import {getMongoConfig} from './configs/mongo.config';
import {ScheduleModule} from '@nestjs/schedule';
import {CommandModule} from 'nestjs-command';
import {SchedulerController} from './scheduler/scheduler.controller';
import {SchedulerModule} from './scheduler/scheduler.module';
import {WordListModule} from './word-list/word-list.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }),
    ScheduleModule.forRoot(),
    CommandModule,
    SchedulerModule,
    WordListModule,
  ],
  controllers: [AppController, SchedulerController],
  providers: [AppService]
})

export class AppModule {
}
