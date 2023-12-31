import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkRequestsComponent } from './pages/work-requests/work-requests.component';
import { WorkOrdersComponent } from './pages/work-orders/work-orders.component';
import { StaffComponent } from './pages/staff/staff.component';
import { GoogleMapsDemoComponent } from './pages/google-maps-demo/google-maps-demo.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'work-request', component: WorkRequestsComponent },
  { path: 'work-orders', component: WorkOrdersComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'google-maps-demo', component: GoogleMapsDemoComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
