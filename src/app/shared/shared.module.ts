import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCounterModule } from './components/cart-counter/cart-counter.module';
import { CartCounterComponent } from './components/cart-counter/cart-counter.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { PromoPipe } from './pipes/promo.pipe';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [PromoPipe, SearchPipe],
  imports: [
    CommonModule,
    CartCounterModule
  ],
  exports: [
    CartCounterComponent,
    PromoPipe,
    SearchPipe
  ]
})
export class SharedModule { }
