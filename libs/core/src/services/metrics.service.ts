import { Injectable, OnModuleDestroy, Scope } from '@nestjs/common';
import { createMetricsLogger, MetricsLogger } from 'aws-embedded-metrics';

/**
 * Service used for logging metric data
 */
@Injectable({ scope: Scope.REQUEST })
export class MetricsService {
  private metrics: MetricsLogger;

  constructor() {
    this.metrics = createMetricsLogger();
  }

  putDimensions(
    ...args: Parameters<MetricsLogger['putDimensions']>
  ): MetricsService {
    this.metrics.putDimensions(...args);

    return this;
  }

  putMetric(...args: Parameters<MetricsLogger['putMetric']>): MetricsService {
    this.metrics.putMetric(...args);

    return this;
  }

  async flush(): Promise<void> {
    await this.metrics.flush();
  }
}
