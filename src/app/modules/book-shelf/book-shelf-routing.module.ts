import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookShelfComponent } from './book-shelf.component';

const routes: Routes = [
  {
    path: '', component: BookShelfComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class BookShelfRoutingModule { }
