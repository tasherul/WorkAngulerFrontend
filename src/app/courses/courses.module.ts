import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCourseComponent,
    ViewCourseComponent,
    EditCourseComponent,
    DeleteCourseComponent,
    ListCourseComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], 
  exports:[
    AddCourseComponent,
    ViewCourseComponent,
    EditCourseComponent,
    DeleteCourseComponent,
    ListCourseComponent
  ]
})
export class CoursesModule { }
