import { MetricsService } from '@app/core';
import { Unit } from 'aws-embedded-metrics';
import { performance } from 'perf_hooks';

const isPromise = (p: any) =>
  typeof p === 'object' && typeof p.then === 'function';

export interface LogCountOptions {
  metrics: MetricsService;
  key: string;
}

export const LogCount = ({ key, metrics }: LogCountOptions) =>
  function (_: any, __: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = isPromise(method)
      ? async (...args: any[]) => {
          metrics.putMetric(key, 1, Unit.Count);
          return await method.apply(this, ...args);
        }
      : (...args: any[]) => {
          metrics.putMetric(key, 1, Unit.Count);
          return method.apply(this, ...args);
        };
  };
