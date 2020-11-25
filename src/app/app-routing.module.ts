import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren:  './views/book-list/book-list.module#BookListModule'
  },
  {
    path: 'basket',
    loadChildren:  './views/basket/basket.module#BasketModule'
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
