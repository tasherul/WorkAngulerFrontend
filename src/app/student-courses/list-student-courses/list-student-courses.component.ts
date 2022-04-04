import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentCoursesService } from '../student-courses.service';

@Component({
  selector: 'app-list-student-courses',
  templateUrl: './list-student-courses.component.html',
  styleUrls: ['./list-student-courses.component.css']
})
export class ListStudentCoursesComponent implements OnInit {
  courseaddForm: FormGroup = new FormGroup({});
  constructor(private activatedRoute: ActivatedRoute,private fromBuilder: FormBuilder,private studentService:StudentCoursesService) { }
  listStudentCourses:any;
  id:string='';
  listCourse:any;
  ngOnInit(): void {
    this.courseaddForm = this.fromBuilder.group({
      'student_id':new FormControl(''),
      'course_id':new FormControl(''),
      
    });

    
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
    });
    this.listStudentCourses = this.studentService.listStudentCourses(this.id).subscribe(data=>{
      console.log(data);
      this.listStudentCourses = data;
    });
    this.listCourse = this.studentService.listCourses().subscribe(data=>{
      console.log(data);
      this.listCourse = data;
    });

  }

 addCourse(){
    this.studentService.addCourse(this.courseaddForm.value).subscribe( data =>  {
      
      window.location.href="/users/list";
    },err =>{console.log(err)});
  } 
  
}
