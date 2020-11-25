import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniBasketComponent } from './mini-basket.component';



@NgModule({
  declarations: [MiniBasketComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MiniBasketComponent
  ]
})
export class MiniBasketModule { }
