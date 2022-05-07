import { productService } from '../../services/inventario.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-agregar-inventario',
  templateUrl: './agregar-inventario.component.html',
  styleUrls: ['./agregar-inventario.component.css']
})
export class AgregarInventarioComponent implements OnInit {

  ModeloProducto: Product= {
    idproduct: '',
    name: '',
    unitprice: 0,
    quantity: 0,
    userid: 0,
    description : '',
    categoryid:0,
    priceout: 0
    }
    addressForm = this.fb.group({
      idproduct: [''],
      name: ['', Validators.required],
      unitprice: ['', Validators.required],
      quantity: ['', Validators.required],
      userid: ['', Validators.required],
      description: ['', Validators.required],
      categoryid: ['', Validators.required],
      priceout: ['', Validators.required],

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
          unitprice: this.addressForm.value.unitprice,
          quantity: this.addressForm.value.quantity,
          userid: this.addressForm.value.userid,
          description: this.addressForm.value.description,
          categoryid: this.addressForm.value.categoryid,
          priceout: this.addressForm.value.priceout,
          idproduct: undefined
        }
      this.productService.addProducto(Prod).subscribe();
       this.router.navigate(['/tablaInventario']);
     }
    }

}
