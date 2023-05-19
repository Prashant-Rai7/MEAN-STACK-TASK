import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  signupAPI = 'http://localhost:4000/register'

  registerUser(userData:any){
   console.log(userData);
   return this.http.post(this.signupAPI,userData)
  }
}
