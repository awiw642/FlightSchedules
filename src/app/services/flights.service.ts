import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { IFlight } from 'app/models/flight.interface';

const API_URL = 'http://localhost:3000/flights/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class FlightsService {
  constructor(private http: Http) {}

  allFlights() {
    return this.http.get(API_URL).map(res => {
      console.log('Get All the flights');
      return res.json().map(flight => {
        const {
          id,
          FlightNumber: flightNumber,
          DateTime: scheduledDate,
          'Origin/Destination': originDestination,
          Registration: registration,
        } = flight;

        return {
          id,
          flightNumber,
          scheduledDate,
          originDestination,
          registration,
        };
      });
    });
  }

  registerFlight(flight: IFlight) {
    const data = {
      Registration: flight.registration,
    };
    return this.http.patch(`${API_URL}${flight.id}`, JSON.stringify(data), HEADER).map(res => {
      return res.json();
    });
  }
}
