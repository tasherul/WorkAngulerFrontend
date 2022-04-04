import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root'
})
export class UserService {

  //baseUrl: string = 'https://jsonplaceholder.cypress.io/';
  baseUrl: string = 'https://testapi.mastermindabacusbd.com/public/api/';
  constructor(private http:HttpClient) { }
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+localStorage.getItem('token')
  });
  options = {
    headers: this.httpHeaders
  };
  listUsers(){ 
    return this.http.get(this.baseUrl+'students',this.options);
  }
  viewuser(id:string){
    return this.http.get(this.baseUrl+'users/'+id);
  }
  addUser(userObj:any){
    return this.http.post(this.baseUrl+'users',userObj);
  }

  
}
