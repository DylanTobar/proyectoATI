import { egresoService } from './../../services/egreso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Egreso } from '../../interfaces/egreso';

@Component({
  selector: 'app-tabla-egreso',
  templateUrl: './tabla-egreso.component.html',
  styleUrls: ['./tabla-egreso.component.css']
})
export class TablaEgresoComponent implements OnInit {

  ListarEgresos!: Egreso[];
  constructor(private egresoService:egresoService, private router:Router) { }

  ngOnInit(): void {
    this.listarEgresos();
  }
  listarEgresos(){
    this.egresoService.getEgreso().subscribe(
      res=>{
        console.log(res)
        this.ListarEgresos=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminarEgreso(idegresos:string){
    this.egresoService.eliminarEgreso(idegresos).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarEgresos;
        this.router.navigate(['/tablaEgreso']);


      },
      err=> console.log(err));
      setTimeout(location.reload.bind(location),500);
  }

  modificarEgreso(idegresos:string){
    this.router.navigate(['/edit/'+idegresos])
  }
  OnnuevoEgreso(){
    this.router.navigate(["/agregarEgreso"])
    }
    actualizar(){
      setTimeout(location.reload.bind(location),100);
    }


}

