# @app/core

This library contains "core" dependencies. Some example include

- Metrics
- Decorators
- Configuration

## Providers

Quick list of the providers (aka services) that this library provides.

| Name                              | Scope           | Token |
| --------------------------------- | --------------- | ----- |
| [MetricsService](#metricsservice) | `Scope.REQUEST` | N/A   |

### MetricsService

Wrapper around the `aws-embedded-metrics` logger. This service is scoped per request as the `aws-embedded-metrics` requires this for proper request logging.
