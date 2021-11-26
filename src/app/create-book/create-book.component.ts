import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = new Book();

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {

  }
}
