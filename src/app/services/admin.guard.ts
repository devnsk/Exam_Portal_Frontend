// import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  // let user :any;
  if (loginService.isLoggedIn() && loginService.getUserRole() === 'ADMIN') {
    return true;
  }
//  user:any =  this.loginService.getUser()
//  user = localStorage.getItem('user');
//  console.log(user);
  router.navigate(['login']);
  return false; // Prevent access
};
