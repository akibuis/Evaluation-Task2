import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './layouts/simple/simple.component';
import { DeviceComponent } from './layouts/device/device.component';
import { DeviceDetailsComponent } from './pages/device-details/device-details.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { HelpComponent } from './pages/help/help.component';

const routes: Routes = [
  { path: "", redirectTo: "/devices", pathMatch: "full" },
  { 
    path: "", component: SimpleComponent,
    children:[
      { path: "devices", component: DevicesComponent },
      { path: "help", component: HelpComponent },
    ]
  },
  { 
    path: "", component: DeviceComponent,
    children:[
      { path: "device-details", component: DeviceDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
