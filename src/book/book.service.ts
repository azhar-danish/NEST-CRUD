import { Book } from "./data/book.dto";
import { books } from "./data/book.source";
export class BookService {
    public books: Book[] = books ;

    addBook(book: Book): Object {
        this.books.push(book);
        return { message: "Book added successfully", book };
    }
    
    getAllBooks(): Object {
        let allBooks: Book[] = [];
        allBooks = this.books;
        return { message: 'Books successfully fetched', books: allBooks }
    }

    getBookById(bookId : String) : Object {
        let bookDetails = this.books.find(e => e.id === bookId)
        if(bookDetails) {
             return { message: 'Books successfully fetched', books: bookDetails }
        }
        return { message: 'Books Not Found' }
    }

    updateBook(book:Book) : Object {
        let result = this.books.map((val) =>{
            if(val.id === book.id) {
                val.title =  book.title;
                val.author = book.author;
                val.published =  book.published;
                return val;
            }
            return val;
        });
        let bookDetail = this.books.find(e => e.id === book.id);
        if(bookDetail){
            return {message : "book updated successfully", book : bookDetail}
        }
        return {message : "bookId not found"}
        
    }

    deleteBookById(bookId : String) : Object {
        let index = this.books.findIndex(e => e.id === bookId);
        if(index === 1) {
            this.books.splice(index, 1);
            return {message : "book deleted successfully"}
        }
        return {message : "bookId not found"}
    }

}