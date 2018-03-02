import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

const API_URL = 'http://localhost:3000/registrations/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class RegistrationsService {
  constructor(private http: Http) {}

  allRegistrations() {
    return this.http.get(API_URL).map(res => {
      return res.json();
    });
  }
}
