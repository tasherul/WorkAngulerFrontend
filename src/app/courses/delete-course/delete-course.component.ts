import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {

  CourseForm: FormGroup = new FormGroup({});
  constructor(private activatedRoute: ActivatedRoute,private fromBuilder: FormBuilder,private CourseService:CourseService) { }
  id:string='';

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
    });
  }

  deleteCourse(){
    //console.log(this.addUserForm.value);
    this.CourseService.deleteCourse(this.id).subscribe(data=>{
      console.log('Course delete')
    },err =>{console.log(err)});
  }


}
