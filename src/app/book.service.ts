import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksSubject = new BehaviorSubject<Book[]>([]);
  private books: Book[] = [];
  private id = 1;

  constructor() {}

  getBooks(): Observable<Book[]> {
    return this.booksSubject.asObservable();
  }

  addBook(
    name: string,
    author: string,
    publishedYear: number,
    synopsis: string
  ) {
    const book = { id: this.id++, name, author, publishedYear, synopsis };
    console.log(book);
    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  deleteBook(id: number) {
    this.books = this.books.filter((book) => book.id != id);
    this.booksSubject.next(this.books);
  }

  getBook(id: number): Book {
    return this.books.filter((book) => book.id != id)[0];
  }
}
