import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  const options = new DocumentBuilder()
  .setTitle('to-do-list-api')
  .setDescription('Master Docs for all todo-list API')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);
  app.enableCors({
    origin: [ 
      'http://localhost:3000',
      'http://anadhu-frontend.s3-website-us-east-1.amazonaws.com/'
    ],
    methods: ["GET", "POST","PUT","DELETE","PATCH"],
    credentials: true,
  });
  await app.listen(3003);
}
bootstrap();

