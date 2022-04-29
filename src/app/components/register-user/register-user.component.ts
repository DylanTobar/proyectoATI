
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../interfaces/register';
import { RegisterUserService } from '../services/registerUser.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent {
  user: Register = {
    admin: "",
    name:'',
    lastname:'',
    email:'',
    password: ''
  };

  addressForm = this.fb.group({
    name: [null, Validators.required],
    lastname: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    admin: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,private _userRegister: RegisterUserService, private _router:Router) {

  }

  crearUsuario() {

      const _user: Register = {
        name: this.addressForm.value.name,
        lastname: this.addressForm.value.lastname,
        email: this.addressForm.value.email,
        password: this.addressForm.value.password,
        admin: this.addressForm.value.admin
      }
      this._userRegister.register(_user);

  }



}
