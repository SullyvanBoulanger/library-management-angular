import { Component, Input } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  @Input() book?: Book;

  constructor(private bookService: BookService) {}

  deleteBook() {
    if (this.book) {
      this.bookService.deleteBook(this.book?.id);
    }
  }
}
