import { Component } from '@angular/core';
import { BookFormComponent } from "./book-form/book-form.component";
import { BookListComponent } from "./book-list/book-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'library-management-angular';
}
