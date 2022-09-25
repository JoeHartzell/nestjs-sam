import { Module } from '@nestjs/common';
import { CreateSettingGroupController } from './create-setting-group.controller';
import { CreateSettingGroupService } from './create-setting-group.service';

@Module({
  imports: [],
  controllers: [CreateSettingGroupController],
  providers: [CreateSettingGroupService],
})
export class CreateSettingGroupModule {}
