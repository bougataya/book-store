import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookListRoutingModule } from './book-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ BookListComponent ],
  imports: [
    CommonModule,
    BookListRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [ BookListComponent ]
})
export class BookListModule { }
