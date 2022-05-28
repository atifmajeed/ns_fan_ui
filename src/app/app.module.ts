import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ToggleSwitchComponent
  ]
})
export class AppModule { }
