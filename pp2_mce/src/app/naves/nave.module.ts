import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesListComponent } from './naves-list.component';
import { NaveDetailComponent } from './nave-detail.component';

@NgModule({
  declarations: [NavesListComponent, NaveDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [NavesListComponent, NaveDetailComponent]
})
export class NaveModule { }
