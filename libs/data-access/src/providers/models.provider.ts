import { SettingModel } from '@app/data-access/models/setting.model';
import { DATA_ACCESS_INIT } from '@app/data-access/tokens';
import { Provider } from '@nestjs/common';

export const createModelProviders = (): Provider[] => [
  {
    provide: SettingModel,
    useFactory: () => SettingModel,
    inject: [DATA_ACCESS_INIT],
  },
];
