import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app01';
  fullname = 'Juhász Zsolt';
  janos: Book;

  constructor() {
    this.janos = {
      title: "Az Angular",
      writer: "Para János"
    };
  }

  csinal(): void {
    this.fullname = 'Pondor Béla';
  }
}

interface Book {
  title: string,
  writer: string
}
