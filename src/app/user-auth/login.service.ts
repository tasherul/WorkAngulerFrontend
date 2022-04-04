import { HttpClient, HttpHeaders, HttpRequest, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: string = 'https://testapi.mastermindabacusbd.com/public/api/';

  csrfToken: any = "";
  constructor(private http: HttpClient, csrfTokenExtractor: HttpXsrfTokenExtractor) {
    this.csrfToken = csrfTokenExtractor.getToken();
  }
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-XSRF-TOKEN': this.csrfToken
  });
  options = {
    headers: this.httpHeaders
  };
  loginUser(userObj: any) {
    console.log(userObj);
    return this.http.post(this.baseUrl + 'login', userObj, this.options);
  }
  registration(fromData: any) {
    console.log(fromData);
    return this.http.post(this.baseUrl + 'register', fromData, this.options);
  }
}
