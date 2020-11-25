import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { RouterModule } from '@angular/router';
import { MiniBasketModule } from 'src/app/shared/components/mini-basket/mini-basket.module';



@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    RouterModule,
    MiniBasketModule
  ],
  exports: [SectionComponent],
})
export class SectionModule { }
