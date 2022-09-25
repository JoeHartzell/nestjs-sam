import { MetricsService } from '@app/core/services/metrics.service';
import { Unit } from 'aws-embedded-metrics';

export interface LogExecutionTimeOptions {
  key: string;
  metrics: MetricsService;
}

export const LogExecutionTime = ({ key, metrics }: LogExecutionTimeOptions) =>
  function (_: any, __: string, descriptor: PropertyDescriptor) {
    let isPromise = false;
    const method = descriptor.value;

    descriptor.value = (...args: any[]) => {
      const startTime = performance.now();
      try {
        const result = method.apply(this, ...args);

        // add a finally for promises
        if (result instanceof Promise) {
          isPromise = true;
          return result.finally(() => {
            metrics.putMetric(
              key,
              performance.now() - startTime,
              Unit.Milliseconds,
            );
          });
        }

        return result;
      } finally {
        // non-promises get handled here
        if (!isPromise) {
          metrics.putMetric(
            key,
            performance.now() - startTime,
            Unit.Milliseconds,
          );
        }
      }
    };
  };
