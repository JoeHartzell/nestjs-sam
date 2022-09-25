import { CoreModule, MetricsService } from '@app/core';
import { DataAccessModule } from '@app/data-access';
import { Module, Scope } from '@nestjs/common';
import { SCOPED_SERVICE } from './tokens';
import { createScopeService } from './services/scoped.service';

@Module({
  imports: [
    DataAccessModule.register({ endpoint: 'http://dynamodb:8000' }),
    CoreModule,
  ],
  providers: [
    {
      scope: Scope.REQUEST,
      provide: SCOPED_SERVICE,
      useFactory: (metrics: MetricsService) => {
        const ScopedService = createScopeService(metrics);
        return new ScopedService();
      },
      inject: [MetricsService],
    },
  ],
})
export class HelloWorldModule {}
