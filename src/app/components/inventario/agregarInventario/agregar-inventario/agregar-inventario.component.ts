import { Product } from './../../../interfaces/product';
import { productService } from './../../../services/inventario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-inventario',
  templateUrl: './agregar-inventario.component.html',
  styleUrls: ['./agregar-inventario.component.css']
})
export class AgregarInventarioComponent implements OnInit {

  ModeloProducto: Product= {
    idproduct: '',
    name: '',
    price: 0,
    active: '',
    userid: '',
    }
    addressForm = this.fb.group({
      idproduct: [''],
      name: ['', Validators.required],
      price: ['', Validators.required],
      active: ['', Validators.required],
      userid: ['', Validators.required],

    });
    editing: boolean = false;

  constructor(private productService:productService,
              private router:Router,
              private fb: FormBuilder,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarProducto();
    }

    cargarProducto() {
      const id_entrada = this._activatedRoute.snapshot.params['idproduct'];

      if (id_entrada) {
        this.editing = true;
        this.productService.getUnProducto(id_entrada).subscribe(
          res => {
            this.ModeloProducto = res[0];
            console.log(res[0]);
          },
          err => console.log(err)
        )
      }else{
        this.editing = false;
      }
    }

    agregarProducto(){
      if(this.editing){
        this.productService.editProducto(this.ModeloProducto.idproduct, this.ModeloProducto);
        this.router.navigate(['/tablaInventario']);

      }else{
        const Prod: Product = {
          name: this.addressForm.value.name,
          price: this.addressForm.value.price,
          active: this.addressForm.value.active,
          userid: this.addressForm.value.userid,
          idproduct: undefined,
        }
      this.productService.addProducto(Prod).subscribe();
       this.router.navigate(['/tablaInventario']);
     }
    }

}
