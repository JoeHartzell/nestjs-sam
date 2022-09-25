import { Test, TestingModule } from '@nestjs/testing';
import { CreateSettingGroupController } from './create-setting-group.controller';
import { CreateSettingGroupService } from './create-setting-group.service';

describe('CreateSettingGroupController', () => {
  let createSettingGroupController: CreateSettingGroupController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CreateSettingGroupController],
      providers: [CreateSettingGroupService],
    }).compile();

    createSettingGroupController = app.get<CreateSettingGroupController>(CreateSettingGroupController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(createSettingGroupController.getHello()).toBe('Hello World!');
    });
  });
});
