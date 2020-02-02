import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortSearchRoutingModule } from './sort-search-routing.module';
import { SortSearchComponent } from './sort-search.component';
import { BookShelfModule } from '../book-shelf/book-shelf.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SortSearchComponent],
  imports: [
    CommonModule,
    SortSearchRoutingModule,
    BookShelfModule
  ],
  exports: [SortSearchComponent]
})
export class SortSearchModule { }
