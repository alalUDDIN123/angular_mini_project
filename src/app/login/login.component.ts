import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private sharedService: SharedService,
    private loginService: LoginService,
    private navigator: Router
  ) { }

  submitForm() {
    const formData = {
      email: this.email,
      password: this.password
    };

    this.loginService.loginUser(formData).subscribe((response) => {
      if (response && response.success) {
        const token = response.token;
        const userID = response.userID;
        this.loginService.getUserDataById(token, userID).subscribe(
          (response: any) => {
            if (response && response.isAdmin) {
              localStorage.setItem('isAdminVisible', 'true');
              this.sharedService.updateAdminVisibility(true);
              this.navigator.navigateByUrl('/admin');
            } else {
              localStorage.setItem('isAdminVisible', 'false');
              this.sharedService.updateAdminVisibility(false);
              this.navigator.navigateByUrl('/');
            }
            localStorage.setItem('loggedIn', 'true');
            this.sharedService.updateLoggedInStatus(true);
          },
          (error: any) => {
            console.error('Endpoint error:', error);
          }
        );
      }
    });
  }

  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('isAdminVisible');
    this.sharedService.updateLoggedInStatus(false);
    this.sharedService.updateAdminVisibility(false);
   
  }
}
