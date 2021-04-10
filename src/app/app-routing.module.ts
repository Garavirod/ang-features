import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './views/requests/requests.component';

const routes: Routes = [
  {path: 'rxjs-api', component:RequestsComponent},
  /* 
    LAZYLOAD CHILDREN ROOTS
    Import module beaces there are all componentes, pipe, an other modules
    that areusefull for all elements in that children routes
  */
  {
    path: 'lazy-load', 
    loadChildren: () => import('./auth/auth.module')
    .then(m=>m.AuthModule)
  },

  {
    path: 'algorithms', 
    loadChildren: () => import('./algorithms/algorithms.module')
    .then(m=>m.AlgorithmsModule)
  },

  {
    path:'auth',
    loadChildren: () =>  import('./auth/auth.module')
    .then(m => m.AuthModule)
  },

  {
    path:'**',
    redirectTo:'rxjs-api'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
