import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';

import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { WorkRequestsComponent } from './pages/work-requests/work-requests.component';
import { WorkOrdersComponent } from './pages/work-orders/work-orders.component';
import { StaffComponent } from './pages/staff/staff.component';
import { SettingsComponent } from './pages/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SublevelMenuComponent,
    MainComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
