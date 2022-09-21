import { Module } from '@nestjs/common';
import { createInitializationProvider } from '@app/data-access/providers/initialization.provider';
import { createModelProviders } from '@app/data-access/providers/models.provider';
import { ConfigurableModuleClass } from '@app/data-access/data-access.module-builder';
import { SettingModel } from '@app/data-access/models/setting.model';

/**
 * Module used for accessing the database
 */
@Module({
  providers: [createInitializationProvider(), ...createModelProviders()],
  exports: [SettingModel],
})
export class DataAccessModule extends ConfigurableModuleClass {}
