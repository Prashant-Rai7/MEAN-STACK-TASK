import { Component } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: any;


  constructor(private _api: ApiService, private _router: Router) {}
  
  loginForm() {
    if (this.myForm.valid) {
      const personData = this.myForm.value;

      this._api.registerUser(personData).subscribe((res) => {
        alert('Registration Successful');
        // console.log("This is response from database.........",res)
        // this._api.personDataArray.push(res);
        this.myForm.reset();
        this._router.navigate(['/login'])
      })

    }
    else{
      alert('All Value Valid Required');
    }
  }
}
