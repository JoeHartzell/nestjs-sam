import { Inject, Injectable } from '@nestjs/common';
import { MetricsService } from '@app/core';
import { Unit } from 'aws-embedded-metrics';

@Injectable()
export class CreateSettingGroupService {
  constructor(@Inject() private metrics: MetricsService) {}

  getHello(): string {
    this.metrics.putMetric('hello', 1, Unit.Count);

    return 'hello';
  }
}
