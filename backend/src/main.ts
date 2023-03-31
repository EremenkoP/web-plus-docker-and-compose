import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const PORT = parseInt(process.env.PORT, 10) || 3000;
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);
}
bootstrap();
