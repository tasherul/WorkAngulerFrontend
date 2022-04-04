import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})

export class ListCourseComponent implements OnInit {
  
  listCourse:any;
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.listCourse = this.courseService.listCourses().subscribe(data=>{
      console.log(data);
      this.listCourse = data;
    });
  }
  
}
