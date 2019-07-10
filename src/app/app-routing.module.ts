import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';


const routes: Routes = [{path:'admin',component:AdminComponent},
                        {path:'patient',component:PatientComponent},
                        {path:'doctor',component:DoctorComponent},
                        {path:'patientDetails/:id',component:PatientsDetailsComponent},
                        {path:'appointment/:id', component: AppointmentComponent},
                        {path:'appointmentDetails/:docID', component:AppointmentDetailsComponent}]
@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
