import { egresoService } from '../../services/egreso.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Egreso } from '../../interfaces/egreso';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  ModeloEgreso: Egreso= {
    idegresos:'',
    idproduct: 0,
    cant: '',
    type: '',
    date: '',
    iduser: 0,
    }
    addressForm = this.fb.group({
      idegresos: [''],
      idproduct: ['', Validators.required],
      cant: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required],
      iduser: ['', Validators.required],

    });
    editing: boolean = false;

  constructor(private egresoService:egresoService,
              private router:Router,
              private fb: FormBuilder,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEgreso();
    }

    cargarEgreso() {
      const id_entrada = this._activatedRoute.snapshot.params['idproduct'];

      if (id_entrada) {
        this.editing = true;
        this.egresoService.getUnEgreso(id_entrada).subscribe(
          res => {
            this.ModeloEgreso = res[0];
            console.log(res[0]);
          },
          err => console.log(err)
        )
      }else{
        this.editing = false;
      }
    }

    agregarEgreso(){
      if(this.editing){
        this.egresoService.editEgreso(this.ModeloEgreso.idegresos, this.ModeloEgreso);
        this.router.navigate(['/tablaEgreso']);

      }else{
        const Egr: Egreso = {
          idproduct: this.addressForm.value.idproduct,
          cant: this.addressForm.value.cant,
          type: this.addressForm.value.type,
          date: this.addressForm.value.date,
          iduser: this.addressForm.value.iduser,
          idegresos: undefined
        }
      this.egresoService.addEgreso(Egr).subscribe();
       this.router.navigate(['/tablaEgreso']);
     }
    }

}
