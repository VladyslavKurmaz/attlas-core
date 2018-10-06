import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    //
    console.log(localStorage);
    if (localStorage.getItem(environment.storage.token)) {
      return true;
    }
    this.router.navigate(['/bind']);
    return false;
    /*/
    return true;
    /*/
  }

}
