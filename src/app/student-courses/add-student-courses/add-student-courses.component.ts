import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentCoursesService } from '../student-courses.service';

@Component({
  selector: 'app-add-student-courses',
  templateUrl: './add-student-courses.component.html',
  styleUrls: ['./add-student-courses.component.css']
})
export class AddStudentCoursesComponent implements OnInit {

  constructor(private fromBuilder: FormBuilder,private studentService:StudentCoursesService) { }

  ngOnInit(): void {
    
  }

}
