import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MyMaterialModule} from "./material";
import { PastAppointmentsComponent } from './past-appointments/past-appointments.component';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PastAppointmentsComponent,
    SpecialityListComponent,
    DoctorListComponent,
    HospitalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
