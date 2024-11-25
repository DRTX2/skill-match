// is the entry  by the application and instance this one.
import { NestFactory } from '@nestjs/core';   
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
