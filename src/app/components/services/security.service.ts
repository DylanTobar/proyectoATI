import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  URL = "https://proyecto-final-ati.herokuapp.com";
  constructor(private http : HttpClient) { }

  login(user: User ){
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
