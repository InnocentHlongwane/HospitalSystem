import { Component, OnInit } from '@angular/core';
import { HospitalServiceService } from '../hospService/hospital-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  patientszzz
  
  constructor(public hospService:HospitalServiceService) { 
    this.patientszzz =this.hospService.getPatientInfo()
  }
  addPatient(PID,Pname,Psurname,Paddress,Ptown){
    this.hospService.addPatient(PID,Pname,Psurname,Paddress,Ptown)
    }
    deletePatient(patient){
    this.hospService.deletePatient(patient)
    }
    editPatient(patient){
    this.hospService.editPatient(patient)
    }
    ngOnInit(){
    }
 

}
