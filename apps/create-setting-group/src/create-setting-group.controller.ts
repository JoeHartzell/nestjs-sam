import { Controller, Get } from '@nestjs/common';
import { CreateSettingGroupService } from './create-setting-group.service';

@Controller()
export class CreateSettingGroupController {
  constructor(private readonly createSettingGroupService: CreateSettingGroupService) {}

  @Get()
  getHello(): string {
    return this.createSettingGroupService.getHello();
  }
}
