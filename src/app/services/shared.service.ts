// shared.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  isLoggedIn$ = new Subject<boolean>();
  isAdminVisible$ = new Subject<boolean>();

  updateLoggedInStatus(loggedIn: boolean) {
    this.isLoggedIn$.next(loggedIn);
  }

  updateAdminVisibility(isAdminVisible: boolean) {
    this.isAdminVisible$.next(isAdminVisible);
  }
}
