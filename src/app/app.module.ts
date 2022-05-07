import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import "@angular/compiler";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NavComponent } from './nav/nav.component';

import { InventarioComponent } from './components/vistas/tablaInventario/tabla-inventario.component';
import { EgresoComponent } from './components/vistas/agg-editEgreso/egreso.component';
import { TablaEgresoComponent } from './components/vistas/tablaEgreso/tabla-egreso.component';
import { AgregarInventarioComponent } from './components/vistas/agg-editInventario/agregar-inventario.component';

import { RegisterUserComponent } from './components/register/register-user/register-user.component';
import { UserComponent } from './components/register/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    PrincipalComponent,
    NavComponent,

    InventarioComponent,
    AgregarInventarioComponent,
    EgresoComponent,
    TablaEgresoComponent

    RegisterUserComponent,
    UserComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
