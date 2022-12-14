import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Book } from './typeorm/entities/Book';
import { BookModule } from './book/book.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'root',
    database:'bookdb',
    entities:[Book],
    synchronize:true
  }), BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
