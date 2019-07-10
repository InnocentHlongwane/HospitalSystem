import { Component, OnInit } from '@angular/core';
import { HospitalServiceService } from '../hospService/hospital-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientsz
  pat_id
 // constructor(public hospitalService:HospitalServiceService) { 
    //this.patientsz=this.hospitalService.getInfo()
 // }
  
  constructor(private route: ActivatedRoute, public hospitalService:HospitalServiceService){
    this.patientsz=this.hospitalService.getPatientInfo()
  }
  // addPatient(PID,Pname,Psurname,Paddress,Ptown){
  //   this.addPatient(PID,Pname,Psurname,Paddress,Ptown)
  //   }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pat_id = params.get('id')})
  }


}
