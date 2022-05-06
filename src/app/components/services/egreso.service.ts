import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
import { Egreso } from '../interfaces/egreso';



@Injectable({
  providedIn: 'root'
})
export class egresoService {


  constructor(private http:HttpClient) { }

  url="https://proyecto-final-ati.herokuapp.com/egresos"
  urlDev = "http://localhost:3000/egresos"


  getEgreso(){
    return this.http.get<egresoService[]>(this.url);
  }

  getUnEgreso(id: string): Observable<Egreso[]> {
    return this.http.get<Egreso[]>(this.url + '/' + id);
  }

  addEgreso(modelo:Egreso){
    return this.http.post(this.url,modelo);
  }

  eliminarEgreso(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  editEgreso(id:string, modelo:Egreso){
    return this.http.put(this.url+'/'+id,modelo).subscribe(
      res => console.log(res)
    );

  }


}

