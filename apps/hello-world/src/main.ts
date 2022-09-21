import { ContextIdFactory, NestFactory } from '@nestjs/core';
import { HttpStatus } from '@nestjs/common';
import { HelloWorldModule, ScopedService } from './hello-world.module';
import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import { SettingModel } from '@app/data-access';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  const app = await NestFactory.createApplicationContext(HelloWorldModule);

  // magic sauce that makes `scope.REQUEST` work
  const contextId = ContextIdFactory.create();
  app.registerRequestByContextId({ context }, contextId);

  const Setting = app.get<typeof SettingModel>(SettingModel);

  const result = await Setting.query({ pk: { eq: 'asdf' } })
    .all()
    .exec();

  // just validating the scoped service working
  let count = 0;
  for (let i = 0; i < 10; i++) {
    const x = await app.resolve(ScopedService, contextId);
    count = x.index;
  }

  return {
    statusCode: HttpStatus.OK,
    body: JSON.stringify({
      message: 'hello world',
      result,
      count,
    }),
  };
};
