import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DataGridModule } from "./components/data-grid/data-grid.module"

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
