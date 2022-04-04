import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  session_token(){
    return localStorage.getItem('token');
  }
  session_chek(){
    if(localStorage.getItem('token'))
      return true;
    else
      return false
  }

}
