import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});
  constructor(private fromBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.addUserForm = this.fromBuilder.group({
      'username':new FormControl(''),
      'email':new FormControl(''),
      'phone':new FormControl('')
    })
  }

  createUser(){
    //console.log(this.addUserForm.value);
    this.userService.addUser(this.addUserForm.value).subscribe(data=>{
      console.log('User Create')
    },err =>{console.log(err)});
  }
}
