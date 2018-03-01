import { Component, ViewEncapsulation } from '@angular/core';
import { IFlight } from 'app/models/flight.interface';
import { FlightsService } from './services/flights.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/reset.css', './app.component.css', '../assets/css/fonts.css'],
})
export class AppComponent implements OnInit {
  constructor(private flightService: FlightsService) { }
  public data: Array<IFlight> = [];

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.flightService.allFlights()
      .subscribe(flights => this.data = flights);
  }
}
