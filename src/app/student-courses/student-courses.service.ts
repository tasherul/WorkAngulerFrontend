import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentCoursesService {


  baseUrl: string = 'https://testapi.mastermindabacusbd.com/public/api/';

  constructor(private http: HttpClient) {
  }
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  options = {
    headers: this.httpHeaders
  };
  listStudentCourses(id: string) {
    return this.http.get(this.baseUrl + 'student_courses/' + id, this.options);
  }
  listCourses() {
    return this.http.get(this.baseUrl + 'courses', this.options);
  }
  addCourse(fromData: any) {
    return this.http.post(this.baseUrl + 'courses', this.options);
  }
}
