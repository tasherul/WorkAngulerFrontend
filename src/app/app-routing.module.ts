import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { DeleteCourseComponent } from './courses/delete-course/delete-course.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { ListCourseComponent } from './courses/list-course/list-course.component';
import { ViewCourseComponent } from './courses/view-course/view-course.component';
import { AddStudentCoursesComponent } from './student-courses/add-student-courses/add-student-courses.component';
import { EditStudentCoursesComponent } from './student-courses/edit-student-courses/edit-student-courses.component';
import { ListStudentCoursesComponent } from './student-courses/list-student-courses/list-student-courses.component';
import { SignInComponent } from './user-auth/sign-in/sign-in.component';
import { SignUpComponent } from './user-auth/sign-up/sign-up.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { AddVideoComponent } from './video/add-video/add-video.component';
import { DeleteVideoComponent } from './video/delete-video/delete-video.component';
import { EditVideoComponent } from './video/edit-video/edit-video.component';
import { ListVideoComponent } from './video/list-video/list-video.component';
import { ViewVideoComponent } from './video/view-video/view-video.component';

const routes: Routes = [

   {path:'sign-in',component:SignInComponent},
   {path:'sign-up',component:SignUpComponent},
  
{
  path:'users',
  children:[
    {path:'create',component:AddUserComponent},
    {path:'list',component:ListUserComponent},
    {path:'delete/:id',component:DeleteUserComponent},
    {path:'edit/:id',component:EditUserComponent},
    {path:'view/:id',component:ViewUserComponent},
  ]
},

{
  path:'courses',
  children:[
    {path:'create',component:AddCourseComponent},
    {path:'list',component:ListCourseComponent},
    {path:'delete/:id',component:DeleteCourseComponent},
    {path:'edit/:id',component:EditCourseComponent},
    {path:'view/:id',component:ViewCourseComponent},
  ]
},
{
  path:'videos',
  children:[
    {path:'create',component:AddVideoComponent},
    {path:'list',component:ListVideoComponent},
    {path:'delete/:id',component:DeleteVideoComponent},
    {path:'edit/:id',component:EditVideoComponent},
    {path:'view/:id',component:ViewVideoComponent},
  ]
},
{
  path:'studencourse',
  children:[
    {path:'create',component:AddStudentCoursesComponent},
    {path:'list/:id',component:ListStudentCoursesComponent},
    {path:'delete/:id',component:DeleteCourseComponent},
    {path:'edit/:id',component:EditStudentCoursesComponent},
    {path:'view/:id',component:ViewCourseComponent},
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
