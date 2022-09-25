import { MetricsService } from '@app/core/services/metrics.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [MetricsService],
  exports: [MetricsService],
})
export class CoreModule {}
