import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customerApp';

  listUsers:any;
  constructor(private userService:UserService){

  }

  ngOnInit():void{
    this.listUsers = this.userService.listUsers().subscribe(data=>{
      this.listUsers=data;
    });
  }
}
