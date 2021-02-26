import { QueueComponent } from './views/queue/queue.component';
import { LinkedListComponent } from './views/linked-list/linked-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'linkedList', component: LinkedListComponent},
      {path:'queue', component: QueueComponent},
      {path:'**', redirectTo:'linkedList'},

    ]          
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmsRoutingModule { }
