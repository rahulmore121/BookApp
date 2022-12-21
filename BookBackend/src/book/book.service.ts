import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/typeorm/entities/Book';
import { CreateBook } from 'src/types/utils/CreateBookType';
import { Repository } from 'typeorm';
import { UpdateBookDto } from './dtos/UpdateBook.dto';

@Injectable()
export class BookService {
    constructor(@InjectRepository(Book) private bookrepo:Repository<Book>){
    }
    getBooks(){
    return this.bookrepo.find()
    }
    createBook(createBook:CreateBook){
        const newBook=this.bookrepo.create({...createBook});
        this.bookrepo.save(newBook);
        return "Book Added Sucessfully"
    }

    updateBook(id:number,updateBook:UpdateBookDto){
    this.bookrepo.update({id},{...updateBook});
    return "Book Updated Sucessfully"
    }

    deleteBook(id:number){
        this.bookrepo.delete(id);
        return "Book Deleted Sucessfully"
    }
    getBook(id:number) {
       return this.bookrepo.findOne({ where: {
        id:id,
      }});
    }


}
