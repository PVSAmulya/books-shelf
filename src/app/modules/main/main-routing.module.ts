import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', loadChildren: () => import('../header/header.module').then(mod => mod.HeaderModule) },
      { path: 'sort-by', loadChildren: () => import('../sort-search/sort-search.module').then(mod => mod.SortSearchModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MainRoutingModule { }
