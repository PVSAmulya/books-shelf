import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';
import { SortSearchModule } from '../sort-search/sort-search.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
CommonModule,
    HeaderRoutingModule,
    SortSearchModule
  ]
})
export class HeaderModule { }
