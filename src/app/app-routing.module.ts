import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AuthGuard } from './Guards/auth.guard';
import { LogginComponent } from './components/loggin/loggin.component';

const routes: Routes = [
  {path:'principal', component: PrincipalComponent, canActivate:[AuthGuard]},
  {path:'loggin', component: LogginComponent, canActivate:[AuthGuard]},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
