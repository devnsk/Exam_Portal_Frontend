import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  }
  constructor(private snack: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) { }

  formSubmit() {
    //username validate
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      this.snack.open('Username is required !', '', {
        duration: 3000
      });
      return;
    }
    //password validate
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open('Password is required !', '', {
        duration: 3000
      });
      return;
    }

    //generate token req to server
    this.loginService.generateToken(this.loginData).subscribe((data: any) => {
      console.log("success");
      console.log(data)
      //login
      this.loginService.loginUser(data.token);
      //check the role

      this.loginService.getCurrentUser().subscribe((user: any) => {
        this.loginService.setUserData(user);
        console.log(user);
        //redirect - admin
        if (this.loginService.getUserRole() == 'ADMIN') {
          //admin dash
          this.router.navigate(['admin']);
          this.loginService.loginStatusSubject.next(true);
        } else if (this.loginService.getUserRole() == 'NORMAL') {
          //regular user
          this.router.navigate(['user-dashboard/0']);
          this.loginService.loginStatusSubject.next(true);
        } else {
          this.loginService.logout();
        }
      })
      // this.loginService.getCurrentUser

    },
      (error) => {
        console.log(error);
        this.snack.open('Invalid Details !! Try again', '', {
          duration: 3000
        })
      }
    )

  }


}
