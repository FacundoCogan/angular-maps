import { Feature } from '../../interfaces/places';
import { MapService } from '../../services';
import { PlacesService } from './../../services/places.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

  public selectedId: string = '';

  constructor(
    private readonly placesService: PlacesService,
    private readonly mapService: MapService
  ){}

  get isLoadingPlaces() {
    return this.placesService.isLoadingPlaces;
  }

  get places() {
    return this.placesService.places;
  }

  flyTo( place: Feature ){
    this.selectedId = place.id;

    const [ lng, lat ] = place.center;
    this.mapService.flyTo( [ lng, lat ] );
  }

  getDirections( place: Feature ) {

    if ( !this.placesService.userLocation ) throw Error ('There is no user location')

    this.placesService.deletePlaces();

    const start = this.placesService.userLocation;
    const end = place.center as [ number, number ];

    this.mapService.getRouteBetweenPoints( start, end )
  }

}
