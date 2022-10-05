import { Component, OnInit } from '@angular/core';
import { BookDataService } from "../book-data.service";
import{Observable}from "rxjs";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
books$: Observable<object>;
  books = [
    {
      title: "Book #1",
      subtitle: "Subtitle #1",
    },
    {
      title: "Book #2",
      subtitle: "Subtitle #2",
    },
    {
      title: "Book #3",
      subtitle: "Subtitle #3",
    },
  ];

  constructor(private bookData: BookDataService) {
    this.books$ = this.bookData.getBooks();

  }
}
