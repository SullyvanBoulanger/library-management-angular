import { Component } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books: Book[] = [];
  
  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.books = this.bookService.books;
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id);
    this.books = this.bookService.books;
  }
}
