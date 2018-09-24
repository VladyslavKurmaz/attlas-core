import { Component, OnInit } from '@angular/core';

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
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.providers = Array<AuthProvider>();
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
        console.log('2');
//        this.error = err;
//        this.loading = false;
      },
      () => {
        console.log('3');
//        this.loading = false;
      }
    );
  }

}
