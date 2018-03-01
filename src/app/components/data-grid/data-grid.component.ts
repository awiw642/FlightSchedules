import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFlight } from 'app/models/flight.interface';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent {
  constructor(private flightService: FlightsService) {}
  @Input() public rows: Array<IFlight>;
  @Output() load = new EventEmitter();
  public display = false;
  public selectedFlight: IFlight = {
    id: '',
    flightNumber: '',
    scheduledDate: new Date(0),
    originDestination: '',
    registration: '',
  };
  public flightRegistration: string;
  public sampleHeaders = ['flight', 'sch. date', 'sch.time', 'o/d', 'registration'];

  showDialog(): void {
    this.display = true;
  }

  closeDialog(): void {
    this.display = false;
    this.flightRegistration = '';
  }

  selectFlight(flight: IFlight): void {
    this.selectedFlight = flight;
  }

  register(flight: IFlight): void {
    this.showDialog();
    this.selectFlight(flight);
    this.flightRegistration = flight.registration;
    console.log(this.selectedFlight);
  }

  saveRegistration() {
    this.flightService.registerFlight(
      Object.assign({}, this.selectedFlight, { registration: this.flightRegistration })
    ).subscribe((response) => {
      console.log('Is this response: ', response);
    });
    this.closeDialog();
  }
}
