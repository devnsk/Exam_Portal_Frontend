import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BASEURL from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { } //di
  header = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
  //add service
  public addUser(user:any) {
    console.log(user)
    return this.http.post(`${BASEURL}/user/`, user, { headers: this.header });
  }
 
}
