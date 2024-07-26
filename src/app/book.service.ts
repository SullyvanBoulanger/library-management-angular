import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  #books: Book[] = [];
  #id = 1;

  constructor() {}

  get books() {
    return this.#books;
  }

  set books(books: Book[]) {
    this.#books = books;
  }

  addBook(
    name: string,
    author: string,
    publishedYear: number,
    synopsis: string
  ) {
    this.#books.push({ id: this.#id++, name, author, publishedYear, synopsis });
  }

  deleteBook(id: number) {
    this.#books = this.#books.filter((book) => book.id != id);
  }

  getBook(id: number): Book {
    return this.#books.filter((book) => book.id != id)[0];
  }
}
