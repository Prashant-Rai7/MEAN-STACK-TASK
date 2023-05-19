import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  myForm: any;
  name: string = '';
  email: string= '';
  password: string= '';
  constructor(private api : ApiService, private fb : FormBuilder){ }

  persondata!: [
    { name: 'Prashant Rai'; email: 'prashant@gmail.com'; password: 'sdkadhdif'; }
  ];

ngOnInit(): void {
 this.myForm = this.fb.group({
    name:[''],
    email:[''],
    password:['']
  })
}

submitForm() {
  // alert("its working")
  const newPerson = { name: this.persondata[0].name, email: this.email, password: this.password, };

//   this.persondata.push({
//     name: this.name,
//     email: this.email,
//     password: this.password
//   })
//   // Reset the form values
//   this.name = '';
//   this.email = '';
//   this.password = '';
}


}
