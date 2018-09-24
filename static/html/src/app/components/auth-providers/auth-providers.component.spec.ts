import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthProvider } from './../../models/auth-provider';
import { AuthProvidersComponent } from './auth-providers.component';

describe('AuthProvidersComponent', () => {
  let component: AuthProvidersComponent;
  let fixture: ComponentFixture<AuthProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthProvidersComponent);
    component = fixture.componentInstance;
    component.providers = Array<AuthProvider>();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
