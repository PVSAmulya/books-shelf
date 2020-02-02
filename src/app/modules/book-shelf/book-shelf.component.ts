import { Component, Input } from '@angular/core';
import { Book } from './books.service';
@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css']
})
export class BookShelfComponent {

  @Input() sortedBooks: Book[];

  constructor() { }
}
