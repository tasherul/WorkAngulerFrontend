import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentCoursesComponent } from './add-student-courses/add-student-courses.component';
import { ViewStudentCoursesComponent } from './view-student-courses/view-student-courses.component';
import { ListStudentCoursesComponent } from './list-student-courses/list-student-courses.component';
import { DeleteStudentCoursesComponent } from './delete-student-courses/delete-student-courses.component';
import { EditStudentCoursesComponent } from './edit-student-courses/edit-student-courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddStudentCoursesComponent,
    ViewStudentCoursesComponent,
    ListStudentCoursesComponent,
    DeleteStudentCoursesComponent,
    EditStudentCoursesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentCoursesModule { }
