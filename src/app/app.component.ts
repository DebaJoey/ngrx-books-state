import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './book-list/books.service';
import { selectBookCollection,selectBooks } from './book-list/state/books.selectors';
import { BooksActions,BooksApiActions } from './book-list/state/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId:string){
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId:string){
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private store : Store, private booksService: GoogleBooksService){}

  ngOnInit(){
    this.booksService.getBooks()
    .subscribe((books) => 
    this.store.dispatch(BooksApiActions.retrievedBookList({books})));
  }

}
