import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {  }

  userId: string = '';
  userDetails : any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    });
    this.userService.viewuser(this.userId).subscribe(data => {
     this.userDetails =data;
      console.log(data);
    });
  }

}
