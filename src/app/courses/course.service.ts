import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 
  baseUrl: string = 'https://testapi.mastermindabacusbd.com/public/api/';

  constructor(private http: HttpClient) {
  }
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+localStorage.getItem('token')
  });
  options = {
    headers: this.httpHeaders
  };
  listCourses(){
    return this.http.get(this.baseUrl+'courses', this.options);
  }
  selectCourses(id: string) {
    return this.http.get(this.baseUrl + 'courses/' + id, this.options);
  }
  addCourse(fromData: any) {
    return this.http.post(this.baseUrl + 'courses',fromData, this.options);
  }
  updateCourse(fromData: any) {
    return this.http.put(this.baseUrl + 'courses',fromData, this.options);
  }
  deleteCourse(id:string) {
    return this.http.delete(this.baseUrl + 'courses/'+id, this.options);
  }
}
