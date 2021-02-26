import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { ForgotComponent } from './views/forgot/forgot.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'forgot', component: ForgotComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: '**', redirectTo: 'login'},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
