import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent {
  name = '';
  author = '';
  publishedYear: number | null = null;
  synopsis = '';

  constructor(private bookService: BookService) {}

  addBook(): void {
    if (this.name && this.author && this.publishedYear) {
      this.bookService.addBook(
        this.name,
        this.author,
        this.publishedYear,
        this.synopsis
      );

      this.name = '';
      this.author = '';
      this.publishedYear = null;
      this.synopsis = '';
    }
  }
}
