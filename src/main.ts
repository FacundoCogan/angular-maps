import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiZmFjdW5kb2NvZ2FuIiwiYSI6ImNsc3oycTh3ZTBrbXQya28ya2w3bmQ0M2UifQ.457GwkDJx6itSVi-KvRc4g';

if ( !navigator.geolocation ){
  alert('Navigator does not support geolocation')
  throw new Error('Navigator does not support geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
