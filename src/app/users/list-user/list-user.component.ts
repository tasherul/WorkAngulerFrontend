import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  listUsers:any;
  
  constructor(private userService:UserService){

  }

  ngOnInit():void{
    this.listUsers = this.userService.listUsers().subscribe(data=>{
      console.log(data);
      this.listUsers=data;
    });
  }
}
