import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './layouts/simple/simple.component';
import { DeviceDetailsComponent } from './pages/device-details/device-details.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { HelpComponent } from './pages/help/help.component';

const routes: Routes = [
  { path: "", redirectTo: "/devices", pathMatch: "full" },
  { 
    path: "", component: SimpleComponent,
    children:[
      { path: "devices", component: DevicesComponent },
      { path: "device-details", component: DeviceDetailsComponent },
      { path: "help", component: HelpComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
