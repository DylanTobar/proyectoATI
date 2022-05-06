import { InventarioComponent } from './components/inventario/tablaInventario/tabla-inventario.component';
import { AgregarInventarioComponent } from './components/inventario/agregarInventario/agregar-inventario/agregar-inventario.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AuthGuard } from './Guards/auth.guard';
import { LogginComponent } from './components/loggin/loggin.component';

const routes: Routes = [
  {path:'principal', component: PrincipalComponent, canActivate:[AuthGuard]},
  {path:'loggin', component: LogginComponent, canActivate:[AuthGuard]},

  {path:'tablaInventario', component: InventarioComponent},
  {path:'agregarInventario', component: AgregarInventarioComponent},
  {path:'edit/:idproduct', component: AgregarInventarioComponent},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
