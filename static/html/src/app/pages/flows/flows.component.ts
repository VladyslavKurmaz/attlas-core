import { Component, OnInit } from '@angular/core';

import { Item } from './../../models/item';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-flows',
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.css']
})
export class FlowsComponent implements OnInit {

  root: Item = new Item();
  flows: string[] = [
    "Find a mentor",
    "Become a consultant"
  ];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getItems('/flows?depth=4').subscribe(
      (v) => {
        this.root = v;
        console.log('1');
        console.log(v);
      },
      (err) => {
        console.log('2');
      },
      () => {
        console.log('3');
      }
    );
  }

}
