import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'konyvtar';
  books!: Books[];
  constructor() { }
 
  ngOnInit(): void {
    this.books = [
      { id: 1, title: 'Jókai Mór', author: 'Árnyképek'},
      { id: 2, title: 'Jókai Mór', author: 'Népvilág'},
      { id: 3, title: 'Jókai Mór', author: 'Délvirágok'}
    ]
  }

}
interface Books {
  id: number,
  title: string,
  author: string
}