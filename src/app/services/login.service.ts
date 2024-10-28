import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import LoginData from '../contracts/login.contract';
import BASEURL from './helper';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileComponent } from '../pages/user/user-profile/user-profile.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  header = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:8086')

  public loginStatusSubject = new Subject<boolean>();
  private dialog = inject(MatDialog)

  constructor(private http: HttpClient, private router: Router) { }

  public generateToken(credential: LoginData) {
    return this.http.post(`${BASEURL}/generate-token`, credential);
  }

  //login user : save token in LocalStorage
  public loginUser(token: string) {
    localStorage.setItem('token', token);
    return true;
  }

  //check wheather logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }
    else {
      return true;
    }
  }

  //logout - remove the token from localstorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loginStatusSubject.next(false);
    // this.router.navigate(['/login']);
    return true;
  }

  // get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //store user details in the localstorage
  public setUserData(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // get user 
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }


  }

  //role
  public getUserRole() {
    // according to backend data
    let user = this.getUser();
    return user.authorities[0].authority;

  }

  //get current user
  public getCurrentUser() {
    return this.http.get(`${BASEURL}/current-user`, { headers: this.header });
  }

  public openUserProfileDialog() {
    this.dialog.open(UserProfileComponent), {

      width: '50%'
    }
  }




}
