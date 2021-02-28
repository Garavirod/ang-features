import { HeapComponent } from './views/heap/heap.component';
import { QueueComponent } from './views/queue/queue.component';
import { LinkedListComponent } from './views/linked-list/linked-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortingComponent } from './views/sorting/sorting.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'linkedList', component: LinkedListComponent},
      {path:'queue', component: QueueComponent},
      {path:'heap', component: HeapComponent},
      {path:'sorting', component: SortingComponent},
      {path:'**', redirectTo:'linkedList'},

    ]          
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmsRoutingModule { }
