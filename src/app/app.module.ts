import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatIconModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatButtonModule,MatCardModule}from '@angular/material';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PatientComponent,
    DoctorComponent,
   AppointmentComponent,
    PatientsDetailsComponent,
    AppointmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule, MatIconModule,
    ReactiveFormsModule, FormsModule,
    MatButtonModule,MatCardModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
