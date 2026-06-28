import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookControllers } from './book.controllers';
@Module({
  imports: [],
  controllers: [BookControllers],
  providers: [BookService],
  exports: [BookService], 
})
export class BookModule {}
