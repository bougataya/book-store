import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { HeaderModule, SectionModule } from '../index'



@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    HeaderModule,
    SectionModule
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
