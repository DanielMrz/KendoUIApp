import { Component, AfterViewInit  } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})

export class GoogleMapsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.loadGoogleMapsScript();
  }

  loadGoogleMapsScript() {
    const apiKey = environment.apiKey;
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
  }

  initMap() {
    
  }

  lat = 51.5074; // Współrzędne szerokości geograficznej (np. dla Londynu)
  lng = -0.1278; // Współrzędne długości geograficznej (np. dla Londynu)
  zoom = 10; // Powiększenie mapy
}
