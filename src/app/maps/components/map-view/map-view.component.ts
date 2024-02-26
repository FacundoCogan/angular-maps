import { Component , AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef<HTMLElement>

  constructor(
    private readonly placesService: PlacesService,
    private readonly mapService: MapService
  ){}

  ngAfterViewInit(): void {

    if( !this.placesService.userLocation ) throw Error('There is no placesService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.userLocation,
      zoom: 14, // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>I'm here</h6>
        <span>I'm in this place of the world</span>
      `);

    new Marker({ color: 'red' })
      .setLngLat( this.placesService.userLocation )
      .setPopup( popup )
      .addTo( map );

    this.mapService.setMap( map );

  }
}
