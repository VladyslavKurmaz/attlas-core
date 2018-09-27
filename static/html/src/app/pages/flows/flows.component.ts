import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flows',
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.css']
})
export class FlowsComponent implements OnInit {

  flows: string[] = [
    "Find a mentor",
    "Become a consultant"
  ];

  constructor() { }

  ngOnInit() {
  }

}
