import { DataAccessModule } from '@app/data-access';
import { Injectable, Module, Scope } from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';

let i = 0;

@Injectable({ scope: Scope.REQUEST })
export class ScopedService {
  index: number;
  constructor() {
    this.index = i++;
  }
}

@Module({
  imports: [DataAccessModule.register({ endpoint: 'http://dynamodb:8000' })],
  providers: [HelloWorldService, ScopedService],
})
export class HelloWorldModule {}
