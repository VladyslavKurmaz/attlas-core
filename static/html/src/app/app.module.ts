import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { Routing } from './app.routing';

import { AuthGuardService } from './services/auth-guard.service';

import { HomeComponent } from './pages/home/home.component';
import { BindComponent } from './pages/bind/bind.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { FlowsComponent } from './pages/flows/flows.component';
import { DocsComponent } from './pages/docs/docs.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HudComponent } from './pages/hud/hud.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthProvidersComponent } from './components/auth-providers/auth-providers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BindComponent,
    ContactsComponent,
    GoalsComponent,
    FlowsComponent,
    DocsComponent,
    SettingsComponent,
    HudComponent,
    NavbarComponent,
    AuthProvidersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing,
    NgbModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
