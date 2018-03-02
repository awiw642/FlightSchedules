import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { IFlight } from 'app/models/flight.interface';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataGridComponent {
  constructor(private flightService: FlightsService) {}
  @Input() public flightRows: Array<IFlight>;
  @Input() public registrationRows: string[];
  @Output() load = new EventEmitter();
  @Output() save = new EventEmitter();
  public display = false;
  public selectedFlight: IFlight = {
    id: '',
    flightNumber: '',
    scheduledDate: new Date(0),
    originDestination: '',
    registration: '',
  };
  public flightRegistration: string;
  public suggestionsList: string[];
  public sampleHeaders = ['flight', 'sch. date', 'sch.time', 'o/d', 'registration'];

  showDialog(): void {
    console.log(this.flightRows);
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
    // COMMENT: Uncomment the piece below to persist data to the mock server
    // this.flightService.registerFlight(
    //   Object.assign({}, this.selectedFlight, { registration: this.flightRegistration })
    // ).subscribe((response) => {
    //   console.log('Is this response: ', response);
    // });
    const flight = Object.assign({}, this.selectedFlight, { registration: this.flightRegistration });
    this.save.emit(flight);
    this.closeDialog();
  }

  filterRegistration(event, registrations: any[]): void {
    const{ query } = event;
    const filtered: string[] = [];
    console.log('ID HERE: ', registrations[0].id);
    for (let i = 0; i < registrations.length; i++) {
      const registration = registrations[i];
      if (registration.id.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        filtered.push(registration.id);
      }
    }
    console.log(filtered);
    this.suggestionsList = filtered;
  }
}
