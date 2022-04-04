import { HttpEvent, HttpHandler, HttpRequest, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  loginuserForm: FormGroup = new FormGroup({});
  constructor(private loginService:LoginService,private fromBuilder: FormBuilder,csrfTokenExtractor: HttpXsrfTokenExtractor) { 

  }
  

  ngOnInit(): void {
    
    this.loginuserForm = this.fromBuilder.group({
      'email':new FormControl(''),
      'password':new FormControl(''),
      
    })
  }
  
  loginUser(){
    this.loginService.loginUser(this.loginuserForm.value).subscribe( data =>  {
      //console.log('User Login: ');
      var dt = JSON.stringify(data);
      var parse_data = JSON.parse(dt);
      var token = parse_data['message'];
      //console.log(token);
      //console.log(JSON.stringify(data));
      localStorage.setItem('token',token);
      //console.log(sessionStorage.getItem('token'))
      window.location.href="/users/list";
    },err =>{console.log(err)});
  }


}
