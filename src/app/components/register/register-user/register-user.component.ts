
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register1 } from '../../interfaces/register';
import { RegisterUserService } from '../../services/register/registerUser.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent {
  user: Register1 = {
    personid:"",
    name:'',
    lastname:'',
    dpi:'',

  };

  addressForm = this.fb.group({
    dpi: [null, Validators.required],
    name: [null, Validators.required],
    lastname: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,private _userRegister: RegisterUserService, private _router:Router) {
    this.form = this.fb.group({
      personid: [''],
    })
  }
  form: FormGroup;


  crearUsuario() {

      const _user: Register1 = {
        dpi: this.addressForm.value.dpi,
        name: this.addressForm.value.name,
        lastname: this.addressForm.value.lastname,
        personid: undefined,

      }
      this._userRegister.register(_user);
      localStorage.setItem("dpi", JSON.stringify (this.addressForm.value.dpi))
      this._router.navigate(['user']);

  }
  grabar_localstorage() {
    let person =  this.form.value.personid

;
  }



}
