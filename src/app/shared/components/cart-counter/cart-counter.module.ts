import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCounterComponent } from './cart-counter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [CartCounterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [CartCounterComponent]
})
export class CartCounterModule { }
