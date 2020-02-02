import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortSearchComponent } from './sort-search.component';


const routes: Routes = [
  {
    path: '', component: SortSearchComponent,
    children: [
      { path: 'book-shelf', loadChildren: () => import('../book-shelf/book-shelf.module').then(mod => mod.BookShelfModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortSearchRoutingModule { }
