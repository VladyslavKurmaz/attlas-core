import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BindComponent } from './pages/bind/bind.component';
import { HudComponent } from './pages/hud/hud.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { FlowsComponent } from './pages/flows/flows.component';
import { DocsComponent } from './pages/docs/docs.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'bind', component: BindComponent },
  { path: 'hud', component: HudComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'contacts', component: ContactsComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'goals', component: GoalsComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'flows', component: FlowsComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'docs', component: DocsComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'settings', component: SettingsComponent/*, canActivate: [AuthGuardService]*/ },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(routes);
