import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgorithmsRoutingModule } from './algorithms-routing.module';
import { LinkedListComponent } from './views/linked-list/linked-list.component';
import { QueueComponent } from './views/queue/queue.component';


@NgModule({
  declarations: [LinkedListComponent, QueueComponent],
  imports: [
    CommonModule,
    AlgorithmsRoutingModule
  ]
})
export class AlgorithmsModule { }
