import { Component } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BookItemComponent } from "../book-item/book-item.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [AsyncPipe, BookItemComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  books: Observable<Book[]>;

  constructor(private bookService: BookService) {
    this.books = bookService.getBooks();
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id);
  }
}
