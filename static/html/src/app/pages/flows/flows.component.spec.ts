import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { FlowsComponent } from './flows.component';

describe('FlowsComponent', () => {
  let component: FlowsComponent;
  let fixture: ComponentFixture<FlowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
