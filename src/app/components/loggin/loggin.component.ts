import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../interfaces/usuario';
import { SecurityService } from '../services/security.service';

export interface log{
  rol: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent {

  _usuario: User = {
    email: '',
    password: '',
    rol:""
  };

  addressForm = this.fb.group({

    email: [null, Validators.required],
    password: [null, Validators.required],

  });

  hasUnitNumber = false;
  rol!: log;

  constructor(private fb: FormBuilder, private _security: SecurityService, private _router: Router) {}

  onLogin() {
    this._security.login(this._usuario).subscribe(
      (res) =>{
        localStorage.setItem('token', res.token);
        this.rol = this.getRol(res.token);
        //this._router.navigate(['principal']);
      }
    )
  }

  private getRol(token: string): log{
    return JSON.parse(atob(token.split('.')[1])) as log;
  }
}
