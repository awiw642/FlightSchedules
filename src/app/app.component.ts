import { Component, ViewEncapsulation } from '@angular/core';
import { IFlight } from 'app/models/flight.interface';
import { FlightsService } from './services/flights.service';
import { RegistrationsService } from './services/registrations.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/reset.css', './app.component.css', '../assets/css/fonts.css'],
})
export class AppComponent implements OnInit {
  constructor(private flightsService: FlightsService, private registrationsService: RegistrationsService) {}

  public data: Array<IFlight> = [];
  public registrations: string[] = [];

  ngOnInit() {
    this.getFlights();
    this.getRegistrations();
  }

  getFlights() {
    this.flightsService.allFlights().subscribe(flights => {
      this.data = flights;
      console.log(flights);
    });
  }

  getRegistrations() {
    this.registrationsService.allRegistrations().subscribe(registrations => this.registrations = registrations);
  }

  saveRegistration(flight: IFlight) {
    return this.data.map((row) => {
      if (row.id === flight.id) { row.registration = flight.registration; }
      return row;
    });
  }
}
