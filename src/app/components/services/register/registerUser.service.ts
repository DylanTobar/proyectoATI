import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  URL = "https://proyecto-final-ati.herokuapp.com";
  constructor(private http : HttpClient) { }

  register(user: {}){
    this.http.post(this.URL+'/person/', user).subscribe(
      res => console.log(res)
    )
  }
  restore(dpi: any){
    this.http.get(this.URL+'/persondpi/', dpi).subscribe(
      res => console.log(res)

    )
    return this.restore
  }


}
