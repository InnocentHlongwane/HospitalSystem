import { Component, OnInit } from '@angular/core';
import { HospitalServiceService } from '../hospService/hospital-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
docAppointment
docID
  constructor(public hospService: HospitalServiceService, public route:ActivatedRoute) { }

  // addDoctor(docID,docName,DocSpecialization){
  //   this.hospService.addDoctor(docID,docName,DocSpecialization)
  //   this.docAppointment=this.hospService.getDocAppoint(docID)
 // }
  ngOnInit() {

    this.route.paramMap.subscribe(params=> {
      this.docID = params.get('docID')
      console.log(this.docID);
      
      this.docAppointment=this.hospService.viewDoctorAppointment(this.docID);
 
   });
  
   }
   addDoctAppointment(PID,APDate,docID){
     this.docAppointment =this.hospService.addDoctAppointment(PID,APDate,docID)
   }
   viewDoctorAppointment(docID){
     this.hospService.viewDoctorAppointment(docID)

   }
  }


