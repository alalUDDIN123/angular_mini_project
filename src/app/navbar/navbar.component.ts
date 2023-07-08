import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  loggedIn_true: boolean = false;
  isAdminVisible: boolean = false;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.checkLoginStatus();
    this.checkAdminVisibility();

    this.sharedService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.loggedIn_true = loggedIn;
    });

    this.sharedService.isAdminVisible$.subscribe((isAdminVisible: boolean) => {
      this.isAdminVisible = isAdminVisible;
    });
  }

  checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      this.loggedIn_true = true;
    } else {
      this.loggedIn_true = false;
    }
  }

  checkAdminVisibility() {
    const isAdminVisible = localStorage.getItem('isAdminVisible');
    if (isAdminVisible === 'true') {
      this.isAdminVisible = true;
    } else {
      this.isAdminVisible = false;
    }
  }

  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('isAdminVisible');
    this.sharedService.updateLoggedInStatus(false);
    this.sharedService.updateAdminVisibility(false);
  }




}
