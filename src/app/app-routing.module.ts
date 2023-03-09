import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PastAppointmentsComponent} from "./past-appointments/past-appointments.component";
import {SpecialityListComponent} from "./speciality-list/speciality-list.component";
import {DoctorListComponent} from "./doctor-list/doctor-list.component";
import {HospitalListComponent} from "./hospital-list/hospital-list.component";

const routes: Routes = [
  {path:'past_appointments', component: PastAppointmentsComponent},
  {path:'speciality_list', component: SpecialityListComponent},
  {path:'doctor_list', component: DoctorListComponent},
  {path:'hospital_list', component: HospitalListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
