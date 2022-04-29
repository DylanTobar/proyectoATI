import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  URL = "https://aeropuerto-dw.herokuapp.com";
  constructor(private http : HttpClient) { }

  login(user: Usuario ){
    return this.http.post<any>(this.URL + '/login',user);
  }

  logout(){
    localStorage.removeItem('token');
  }

  logedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
