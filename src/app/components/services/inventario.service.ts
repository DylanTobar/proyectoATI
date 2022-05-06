import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class productService {


  constructor(private http:HttpClient) { }

  url="https://proyecto-final-ati.herokuapp.com/product"


  getProducto(){
    return this.http.get<productService[]>(this.url);
  }

  getUnProducto(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/' + id);
  }

  addProducto(modelo:Product){
    return this.http.post(this.url,modelo);
  }

  eliminarProducto(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  editProducto(id:string, modelo:Product){
    return this.http.put(this.url+'/'+id,modelo).subscribe(
      res => console.log(res)
    );

  }


}

