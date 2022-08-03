import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(formData:User){

    return this.http.post(`${url}/users`, formData)
                  .pipe(tap((resp:any)=>{localStorage.setItem('token', resp.token)
                  }));
  }
  login(formData:any){

    return this.http.post(`${url}/login`, formData)
                .pipe(tap((resp:any)=>{localStorage.setItem('token', resp.msg)
                }));
  }
}
