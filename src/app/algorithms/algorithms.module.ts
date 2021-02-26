import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgorithmsRoutingModule } from './algorithms-routing.module';
import { LinkedListComponent } from './views/linked-list/linked-list.component';


@NgModule({
  declarations: [LinkedListComponent],
  imports: [
    CommonModule,
    AlgorithmsRoutingModule
  ]
})
export class AlgorithmsModule { }
