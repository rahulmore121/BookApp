import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import {cors} from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, ); //{ cors: true }
  app.enableCors();

  //app.use(cors());

//   app.enableCors({
//     origin: '*',
//     methods: 'GET, PUT, POST, DELETE',
//     allowedHeaders: 'Content-Type, Authorization',
// });

await app.listen(80);
}
bootstrap();
