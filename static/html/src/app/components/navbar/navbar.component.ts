import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavbarRouteItem } from './../../models/navbar-route-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  routeItems: NavbarRouteItem[] = [
    { id: 'contacts', group: false },
    { id: 'goals', group: false },
    { id: 'flows', group: false },
    { id: 'docs', group: false },
//    { id: 'search', group: true },
    { id: 'settings', group: true }
  ];
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  isCurrentPage(item: NavbarRouteItem): boolean {
    return (this.router.url.indexOf(item.id) > -1);
  }

  activateRouteItem(item: NavbarRouteItem) {
    this.router.navigate(['/'+item.id]);
  }

  

}
