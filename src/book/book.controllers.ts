import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
import { Controller, Post, Req, Get, Param, Put, Delete } from "@nestjs/common";
import type { Request } from "express";

@Controller('Book')
export class BookControllers {
    constructor(private readonly bookService: BookService) {}

    @Post("/add")
    addBook(@Req() request : Request) : Object {
        const result = this.bookService.addBook(request.body);
        return result;
    }

    @Get("/")
    getAllBook():Object {
        const result = this.bookService.getAllBooks();
        return result;
    }

    @Get('/getBookById/:bookId')
    getBookById(@Param() param : {bookId : String}): Object {
        console.log('book by Id');
        return this.bookService.getBookById(param.bookId);
    }

    @Put("/updateBook")
    updateBook(@Req() request : Request) : Object {
        return this.bookService.updateBook(request.body);
    }

    @Delete("/deleteBookById/:bookId")
    deleteBookById(@Param() param :  { bookId : String}) : Object {
        return this.bookService.deleteBookById(param.bookId);
    }
}