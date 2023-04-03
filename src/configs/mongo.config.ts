import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose/dist/typegoose-options.interface';

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions()
  };
};

const getMongoString = (configService: ConfigService) =>
  configService.get('MONGO_STRING');

const getMongoOptions = () => ({
});