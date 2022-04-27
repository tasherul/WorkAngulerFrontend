import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  CourseForm: FormGroup = new FormGroup({});
  constructor(private fromBuilder: FormBuilder,private CourseService:CourseService) { }


  ngOnInit(): void {
    this.CourseForm = this.fromBuilder.group({
      'name':new FormControl(''),
      'description':new FormControl(''),
    })
  }

  createCourse(){
    //console.log(this.addUserForm.value);
    this.CourseService.addCourse(this.CourseForm.value).subscribe(data=>{
      console.log('Course Create')
    },err =>{console.log(err)});
  }

}
