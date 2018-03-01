import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { DataGridModule } from './components/data-grid/data-grid.module';

import { AppComponent } from './app.component';
import { FlightsService } from './services/flights.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DataGridModule, HttpModule],
  providers: [FlightsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
