import { productService } from './../../services/inventario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-inventario',
  templateUrl: './tabla-inventario.component.html',
  styleUrls: ['./tabla-inventario.component.css']
})
export class InventarioComponent implements OnInit {

  ListarProductos!: Product[];
  constructor(private productService:productService, private router:Router) { }

  ngOnInit(): void {
    this.listarproductos();
  }
  listarproductos(){
    this.productService.getProducto().subscribe(
      res=>{
        console.log(res)
        this.ListarProductos=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminarProducto(idproduct:string){
    this.productService.eliminarProducto(idproduct).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarProductos;
        this.router.navigate(['/tablaInventario']);


      },
      err=> console.log(err));
      setTimeout(location.reload.bind(location),500);
  }

  modificarProducto(idproduct:string){
    this.router.navigate(['/edit/'+idproduct])
  }
  OnnuevoProducto(){
    this.router.navigate(["/agregarInventario"])
    }
    actualizar(){
      setTimeout(location.reload.bind(location),100);
    }


}

