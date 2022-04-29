
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SecurityService } from '../components/services/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private security : SecurityService,
              private _router : Router){

  }
  canActivate(): boolean  {
    if(this.security.logedIn()){
      return true;
    }
    this._router.navigate(["/login"]);
    return false;
  }

}
