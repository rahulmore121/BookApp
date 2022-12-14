import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dtos/CreateBook.dto';
import { UpdateBookDto } from './dtos/UpdateBook.dto';

@Controller('book')
export class BookController {
constructor(private bookservice:BookService){}

@Get(':id')
getBook(@Param('id',ParseIntPipe) id:number){
   return this.bookservice.getBook(id) 
}

@Get()
getBooks(){
   return this.bookservice.getBooks() 
}




@Post('/addbook')
createBook(@Body()createBookDto:CreateBookDto){
return this.bookservice.createBook(createBookDto)
}

@Put(':id')
updateBook(@Param('id',ParseIntPipe) id:number,@Body() updateBookdto:UpdateBookDto){
return this.bookservice.updateBook(id,updateBookdto)
}

@Delete(':id')
deleteBook(@Param('id',ParseIntPipe) id:number){
    return this.bookservice.deleteBook(id)
}



}
