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
  // loginUser(userObj: any) {
  //   console.log(userObj);
  //   return this.http.post(this.baseUrl + 'login', userObj, this.options);
  // }
  // registration(fromData: any) {
  //   console.log(fromData);
  //   return this.http.post(this.baseUrl + 'register', fromData, this.options);
  // }
}
