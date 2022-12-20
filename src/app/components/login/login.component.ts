import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  form: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get User(){
    return this.form.get("user");
  }

  get Password(){
    return this.form.get("password");
  }

  get Email(){
    return this.form.get("email");
  }

  get UserValid(){
    return false;
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get EmailValid(){
    return false
  }

  onEnviar(event: Event){
    event.preventDefault;
    if(this.form.valid){
      alert("Formulario valido!")
    }else{
      this.form.markAllAsTouched;
    }
  }

  ngOnInit(): void {}

}
