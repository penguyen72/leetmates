import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from Remix frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If sending cookies or authentication headers
  });

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
