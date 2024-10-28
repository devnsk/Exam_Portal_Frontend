import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService,private _snackBar: MatSnackBar) { }
  public user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  }

  public response :any;
  ngOnInit(): void {

  }
  clearForm() {
    this.user = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: ''
    };
   
  
  }
  formSubmit() {
    // alert("Form Submitted")
    if (this.user.username == '' || this.user.username == null) {
      this._snackBar.open('Username is required','',{
        duration:3000
      })
      return;
    }
    if(this.user.username.length < 5){
      this._snackBar.open('Username should be at least 5 character ','ok',{
        duration:2500
      })
      return;
    }
    //addUser
    // this.userService.addUser(this.user).subscribe(
    //   (data) => {
    //     console.log(data);
    //     alert('user registered');
    //   },
    //   err => {
    //     console.log(err);
    //     alert('User registration Failed')
    //   })
    //service inject --
    this.userService.addUser(this.user).subscribe(res => {
      this.response = res;
      this._snackBar.open('User Registered Successfully !','ok',{
        duration:2500
      });
      this.clearForm();
    }, err => {
      console.log(err)
      this._snackBar.open(err.error.text,'ok',{
        duration:4000
      })
    })

  }
}
