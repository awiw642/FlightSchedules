import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { DataGridModule } from './components/data-grid/data-grid.module';

import { AppComponent } from './app.component';
import { FlightsService } from './services/flights.service';
import { RegistrationsService } from './services/registrations.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataGridModule, HttpModule],
  providers: [FlightsService, RegistrationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
