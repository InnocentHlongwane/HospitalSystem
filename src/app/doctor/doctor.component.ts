import { Component, OnInit } from '@angular/core';
import { HospitalServiceService } from '../hospService/hospital-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctorArr
  docID
  constructor(public hospService:HospitalServiceService, public route:ActivatedRoute) {}
  
  addDoctor(docID,docName,docSurname){
    this.hospService.addDoctor(this.docID,docName,docSurname)
    this.doctorArr=this.hospService.getDoctorInfo(this.docID);
  }
  removeDoctor(newdoc){
    this.doctorArr=this.hospService.removeDoctor(newdoc)
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params=> {
      this.docID = params.get('docID')
      console.log(this.docID);
      
      this.doctorArr=this.hospService.getDoctorInfo(this.docID);
 
   });
  }

}
