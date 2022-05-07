import { InventarioComponent } from './components/vistas/tablaInventario/tabla-inventario.component';
import { AgregarInventarioComponent } from './components/vistas/agg-editInventario/agregar-inventario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AuthGuard } from './Guards/auth.guard';
import { LogginComponent } from './components/loggin/loggin.component';

import { EgresoComponent } from './components/vistas/agg-editEgreso/egreso.component';
import { TablaEgresoComponent } from './components/vistas/tablaEgreso/tabla-egreso.component';

import { RegisterUserComponent } from './components/register/register-user/register-user.component';
import { UserComponent } from './components/register/user/user.component';


const routes: Routes = [
  {path:'principal', component: PrincipalComponent, canActivate:[AuthGuard]},
  {path:'loggin', component: LogginComponent,},
  {path:'register', component: RegisterUserComponent, canActivate:[AuthGuard]},
  {path:'user', component: UserComponent, canActivate:[AuthGuard]},

  {path:'tablaInventario', component: InventarioComponent},
  {path:'agregarInventario', component: AgregarInventarioComponent},
  {path:'edit/:idproduct', component: AgregarInventarioComponent},

  {path:'tablaEgreso', component: TablaEgresoComponent},
  {path:'agregarEgreso', component: EgresoComponent},
  {path:'edit/:idegreso', component: EgresoComponent},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
