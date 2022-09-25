import { NestFactory } from '@nestjs/core';
import { CreateSettingGroupModule } from './create-setting-group.module';

async function bootstrap() {
  const app = await NestFactory.create(CreateSettingGroupModule);
  await app.listen(3000);
}
bootstrap();
