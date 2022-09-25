import { MetricsService } from '@app/core';
import { LogCount, LogExecutionTime } from '@app/core/decorators';
import { Unit } from 'aws-embedded-metrics';

// this is to count the number of class constructor calls
// only used to demonstrate the service scope
let i = 0;

export const createScopeService = (metrics: MetricsService) => {
  class ScopedService {
    index: number;
    constructor() {
      metrics.putMetric('ScopedService.Created', 1, Unit.Count);
      this.index = i++;
    }

    @LogExecutionTime({ key: 'ScopedService.Test.Latency', metrics })
    @LogCount({ key: 'ScopedService.Test', metrics })
    async test() {
      return await new Promise((resolve) => {
        setTimeout(() => {
          console.log('test executed');
          resolve(null);
        }, 100);
      });
    }
  }

  return ScopedService;
};

export type ScopedService = InstanceType<ReturnType<typeof createScopeService>>;
