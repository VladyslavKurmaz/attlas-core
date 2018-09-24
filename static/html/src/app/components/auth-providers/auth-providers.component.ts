import { Component, OnInit, Input } from '@angular/core';

import { Contact } from './../../models/contacts';

@Component({
  selector: 'app-auth-providers',
  templateUrl: './auth-providers.component.html',
  styleUrls: ['./auth-providers.component.css']
})
export class AuthProvidersComponent implements OnInit {

  @Input() providers: Contact[];

  constructor() { }

  ngOnInit() {
  }

}
