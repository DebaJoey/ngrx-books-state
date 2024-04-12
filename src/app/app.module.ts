import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './book-list/books.reducer';
import { collectionReducer } from './book-list/state/collection.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component'

@NgModule({
  imports: [
          BrowserModule, 
          StoreModule.forRoot({books : booksReducer, collection : collectionReducer}),
          HttpClientModule,
          CommonModule],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
