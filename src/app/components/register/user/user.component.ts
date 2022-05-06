import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register2 } from '../../interfaces/register';
import { UserService } from '../../services/register/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {
  user: Register2 = {
    iduser:'',
    idperson: '',
    admin:'',
    email:'',
    password:'',

  };

  addressForm = this.fb.group({

    iduser: [""],
    admin: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,private _userRegister: UserService, private _router:Router) {

  }

  crearUsuario() {

      const _user: Register2 = {
        idperson:localStorage.getItem("persona"),
        iduser: undefined,
        admin: this.addressForm.value.admin,
        email: this.addressForm.value.email,
        password: this.addressForm.value.password,

      }
      this._userRegister.register(_user);

  }



}
