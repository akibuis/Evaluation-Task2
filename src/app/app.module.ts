import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { SimpleComponent } from './layouts/simple/simple.component';
import { HttpClientModule } from "@angular/common/http";

import { DevicesComponent } from './pages/devices/devices.component';
import { HelpComponent } from './pages/help/help.component';
import { DeviceDetailsComponent } from './pages/device-details/device-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SimpleComponent,
    DevicesComponent,
    HelpComponent,
    DeviceDetailsComponent
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
