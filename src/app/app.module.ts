import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './book-list/books.reducer';
import { collectionReducer } from './book-list/state/collection.reducer';
import {HttpClientModule} from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component'

@NgModule({
  imports: [
          BrowserModule, 
          StoreModule.forRoot({books : booksReducer, collection : collectionReducer}),
          HttpClientModule],
  declarations: [AppComponent, BookListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
