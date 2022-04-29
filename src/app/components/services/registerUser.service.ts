import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  URL = "https://proyecto-final-ati.herokuapp.com";
  constructor(private http : HttpClient) { }

  register(user: {}){
    this.http.post(this.URL+'/user/', user).subscribe(
      res => console.log(res)
    )
  }


}
