import { HttpXsrfTokenExtractor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  registrationForm: FormGroup = new FormGroup({});
  constructor(private loginService:LoginService,private fromBuilder: FormBuilder,csrfTokenExtractor: HttpXsrfTokenExtractor) { 

  }
  

  ngOnInit(): void {
    
    this.registrationForm = this.fromBuilder.group({
      'email':new FormControl(''),
      'password':new FormControl(''),
      'name':new FormControl(''),
    })
  }
  registerUser(){
    this.loginService.registration(this.registrationForm.value).subscribe(data=>{
      console.log('Register: ');
      console.log(data);
      
    },err =>{console.log(err)});
  }

}
