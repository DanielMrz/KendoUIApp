import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleMapsDemoComponent } from './google-maps-demo/google-maps-demo.component';



@NgModule({
  declarations: [
    GoogleMapsComponent,
    GoogleMapsDemoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
