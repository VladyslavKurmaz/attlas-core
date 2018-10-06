import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from './../../models/contact';
import { AuthProvider } from './../../models/auth-provider';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  providers: AuthProvider[] = [];
  loading = false;
  error = '';
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.refreshProvidersList();
  }

  refreshProvidersList() {
    this.providers = Array<AuthProvider>();
    this.loading = true;
    this.error = '';
    //
    this.auth.getProviders().subscribe(
      (v) => {
        console.log('1');
        this.providers = v.map(function(contact) {
          const provider: AuthProvider = new AuthProvider();
          provider.id = contact.id;
          provider.active = contact.active;
          provider.authLink = this.auth.getProviderBindLink(provider.id, '/bind');
          return provider;
        }.bind(this));
      },
      (err) => {
        this.error = err;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  gotoHud() {
    this.router.navigate(['/hud']);
  }

  gotoProfile() {
    this.router.navigate(['/settings']);
  }
}
