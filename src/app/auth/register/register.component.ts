import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;
  public registerForm = this.fb.group({

    name: ['', [Validators.required, Validators.minLength(2)]],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    password2:['', Validators.required],
    terms:[false, Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createUser(){
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      console.log('post');
      
    }
    else{
      console.log('error');
      
    }
    
  }
  notValidField(field:string):boolean{
    if(this.registerForm.get(field).invalid && this.formSubmitted){
      return true;
    }else {
      return false;
    }

  }

}
