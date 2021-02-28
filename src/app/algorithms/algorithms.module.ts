import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlgorithmsRoutingModule } from './algorithms-routing.module';
import { LinkedListComponent } from './views/linked-list/linked-list.component';
import { QueueComponent } from './views/queue/queue.component';
import { HeapComponent } from './views/heap/heap.component';
import { SortingComponent } from './views/sorting/sorting.component';


@NgModule({
  declarations: [LinkedListComponent, QueueComponent, HeapComponent, SortingComponent],
  imports: [
    CommonModule,
    AlgorithmsRoutingModule
  ]
})
export class AlgorithmsModule { }
