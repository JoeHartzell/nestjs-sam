import { MODULE_OPTIONS_TOKEN } from '@app/data-access/data-access.module-builder';
import { DataAccessModuleOptions } from '@app/data-access/interfaces/data-access-module-options.interface';
import { SettingModel } from '@app/data-access/models/setting.model';
import { DATA_ACCESS_INIT } from '@app/data-access/tokens';
import { Provider } from '@nestjs/common';
import * as dynamoose from 'dynamoose';

export const createInitializationProvider = (): Provider => ({
  provide: DATA_ACCESS_INIT,
  useFactory(options: DataAccessModuleOptions) {
    // only supports local ATM
    dynamoose.aws.ddb.local(options.endpoint);

    new dynamoose.Table('Settings', [SettingModel], {
      create: true,
    });
  },
  inject: [MODULE_OPTIONS_TOKEN],
});
