import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{UserService}from '../../services/user.service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public loginForm = this.fb.group({
    email:[localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password:['', Validators.required],
    remember:[false]
  });

  constructor(private fb: FormBuilder, private UserService:UserService,private Router:Router) { }

  ngOnInit(): void {}
  login(){
    this.formSubmitted = true;
    this.UserService.login(this.loginForm.value).subscribe(resp=>{
      if(this.loginForm.get('remember').value === true){
        localStorage.setItem('email', this.loginForm.get('email').value);
      }else{
        localStorage.removeItem('email');
      }   
    },
    (err)=>{swal.fire('Error', err.error.msg, 'error')})

    // this.Router.navigateByUrl('/')

  }
  notValidField(field:string):boolean{
    if(this.loginForm.get(field).invalid && this.formSubmitted){
      return true;
    }else {
      return false;
    }
  }


}
