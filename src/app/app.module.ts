import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksService } from './modules/book-shelf/books.service';
import { SortSearchService } from './modules/sort-search/sort-search.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService, SortSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
