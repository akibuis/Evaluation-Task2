import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SimpleComponent } from './layouts/simple/simple.component';
import { HttpClientModule } from "@angular/common/http";

import { DevicesComponent } from './pages/devices/devices.component';
import { HelpComponent } from './pages/help/help.component';
import { DeviceDetailsComponent } from './pages/device-details/device-details.component';
import { DeviceComponent } from './layouts/device/device.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { HelpLayoutComponent } from './layouts/help-layout/help-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SimpleComponent,
    DevicesComponent,
    HelpComponent,
    DeviceDetailsComponent,
    DeviceComponent,
    Footer2Component,
    HelpLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
