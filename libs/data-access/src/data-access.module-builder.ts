import { DataAccessModuleOptions } from '@app/data-access/interfaces/data-access-module-options.interface';
import { ConfigurableModuleBuilder } from '@nestjs/common';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<DataAccessModuleOptions>().build();
