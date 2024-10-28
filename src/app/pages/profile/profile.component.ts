import { Component } from '@angular/core';
import { User } from 'src/app/contracts/user.contract';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = {
    id: 0, // or any default value
    username: '',
    password: '', // Consider not exposing this
    firstName: '',
    lastName: '',
    email: '',
    phone: null,
    enabled: false,
    profile: 'default.png',
    authorities: [],
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true,
  };
  constructor(private loginService: LoginService) { }
  ngOnInit() {
    this.user = this.loginService.getUser();
    console.log(this.user)
  }
}
