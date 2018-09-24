import { Component, OnInit, Input } from '@angular/core';

import { AuthProvider } from './../../models/auth-provider';

@Component({
  selector: 'app-auth-providers',
  templateUrl: './auth-providers.component.html',
  styleUrls: ['./auth-providers.component.css']
})
export class AuthProvidersComponent implements OnInit {

  @Input() providers: AuthProvider[];

  constructor() { }

  ngOnInit() {
  }

}
