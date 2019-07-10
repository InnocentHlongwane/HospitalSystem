import { Component, OnInit } from '@angular/core';
import { HorizontalConnectionPos } from '@angular/cdk/overlay';
import { ActivatedRoute } from '@angular/router';
import { HospitalServiceService } from '../hospService/hospital-service.service';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
// APatient
patientsz
//ADate
//ApReason
//DoctorNames
//patientID
 id 
  constructor( public hospService: HospitalServiceService, public route:ActivatedRoute) {
   // this.APatient =this.hospService.getAppointInfo()
    //this.patientsz = this.hospService.getPatientInfo()
  }
  RemovePatientInfo(newAppoint){
    this.patientsz= this.hospService.RemovePatientInfo(newAppoint)
  }

  AddAppointInfo(id,APDate,ApReason,docID){  
    this.hospService.AddAppointInfo(this.id,APDate,ApReason,docID)
    this.patientsz=this.hospService.getAppointment(this.id);
  }
  
  editAppointInfo(newApppoint){
    this.patientsz=this.hospService.editAppointInfo(newApppoint)
  }

 ngOnInit() {
    this.route.paramMap.subscribe(params=> {
     this.id = params.get('id')
     console.log(this.id);
     
     this.patientsz=this.hospService.getAppointment(this.id);

  });
    // console.log(this.patientID);
  }

}
