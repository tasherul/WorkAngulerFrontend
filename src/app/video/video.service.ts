import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

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
  listVideos(){
    return this.http.get(this.baseUrl+'videos', this.options);
  }
 
  
}
 