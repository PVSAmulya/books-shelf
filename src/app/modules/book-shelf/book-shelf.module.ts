import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookShelfRoutingModule } from './book-shelf-routing.module';
import { BookShelfComponent } from './book-shelf.component';

@NgModule({
  declarations: [BookShelfComponent],
  imports: [
  CommonModule,
    BookShelfRoutingModule
  ],
  exports: [
    BookShelfComponent
  ]
})
export class BookShelfModule { }
