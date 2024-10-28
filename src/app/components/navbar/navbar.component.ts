import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn = false;
  user: any;



  constructor(public loginService: LoginService, private router: Router) { }

  // ngOnInit(): void {
  //   this.isLoggedIn = this.loginService.isLoggedIn();
  //   this.user = this.loginService.getUser();
  //   this.loginService.loginStatusSubject.asObservable().subscribe((data) => {
  //     this.isLoggedIn = this.loginService.isLoggedIn();
  //     this.user = this.loginService.getUser()
  //   })
  // }
  // public logOut() {
  //   this.loginService.logout();

  //   // this.loginService.loginStatusSubject.next(false);
  //   // window.location.reload();

  // }
  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();

    this.loginService.loginStatusSubject.asObservable().subscribe((data) => {
      const loggedIn = this.loginService.isLoggedIn();
      // Only update if the login status has changed
      if (this.isLoggedIn !== loggedIn) {
        this.isLoggedIn = loggedIn;
        this.user = this.loginService.getUser();
      }
    });
  }
  public getProfileLink() {
    console.log(this.user)
    if (this.user.authorities[0].authority == 'ADMIN') {
      return '/admin/profile';
    }
    else if (this.user.authorities[0].authority == 'NORMAL') {
      this.loginService.openUserProfileDialog();
    }
    return '/';
  }
  public logOut() {
    this.loginService.logout(); // Call the logout method
    this.isLoggedIn = false; // Update local state
    this.user = null; // Clear user information
    this.loginService.loginStatusSubject.next(false); // Notify other components
    this.router.navigate(['/login']); // Redirect to the login page
  }


}
