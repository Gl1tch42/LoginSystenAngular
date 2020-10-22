import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'singup', component: SingUpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
