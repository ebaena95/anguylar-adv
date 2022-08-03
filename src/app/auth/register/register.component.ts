import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2'; 
import{UserService}from '../../services/user.service';

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

    name: ['Cuc', [Validators.required, Validators.minLength(2)]],
    email:['cuc@cuc.com', [Validators.required, Validators.email]],
    password:['123', Validators.required],
    password2:['123', Validators.required],
    terms:[false, Validators.required]
  },
  {validators: this.matchPass('password', 'password2') }
  );

  constructor(private fb: FormBuilder, private UserService:UserService) { }

  ngOnInit(): void {
  }

  createUser(){
    this.formSubmitted = true;
    if(this.registerForm.invalid || this.registerForm.get('terms').value === false){
     return  
    }
    this.UserService.createUser(this.registerForm.value)
        .subscribe(resp=>{
          console.log('created');
          console.log(resp);        
        },(err)=>{
          swal.fire('Error', err.error.msg, 'error')
        });

  }
  notValidField(field:string):boolean{
    if(this.registerForm.get(field).invalid && this.formSubmitted){
      return true;
    }else {
      return false;
    }
  }
  verifyPasswords():boolean{
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if(pass1 === pass2){
      return true;
    }else{
      return false
    }
  }
  matchPass(pass1:string, pass2:string){

    return (FormGroup:FormGroup)=>{
      const pass1Control = FormGroup.get(pass1);
      const pass2Control = FormGroup.get(pass2);

      if(pass1Control.value === pass2Control.value){   
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({itsNotSame:true});
      }
    }
  }
}
