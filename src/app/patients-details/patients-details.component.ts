import { Component, OnInit } from '@angular/core';
import { HospitalServiceService } from '../hospService/hospital-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.css']
})
export class PatientsDetailsComponent implements OnInit {

  PatientArr
patientID


  constructor(public hosService:HospitalServiceService, public route:ActivatedRoute) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.patientID=params.get('id')
      this.PatientArr = this.hosService.getPatient(this.patientID)
      console.log(this.PatientArr)
    })
   
      }
      deletePatient(patient){
        this.hosService.deletePatient(patient)
  }
  editPatient(patient){
    this.hosService.editPatient(patient)
    }
}
