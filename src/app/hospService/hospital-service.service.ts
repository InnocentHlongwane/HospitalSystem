import { Injectable, APP_ID } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class HospitalServiceService {
  //for admin component
  patients =[]
  PID:string=""
  Pname:string=""
  Psurname:string=""
  Paddress:string=""
  Ptown:string=""

//for appointment component
  APatient=[]
  APDate='';
  ApReason='';
   DoctorName='';
   APP_ID=''

   //for doctor component
   doctorArr=[]
   docID=''
   docName =''
  // docSurname=''
   DocSpecialization=''

  constructor() { }

  getAppointInfo(){
    return this.APatient
  }
  AddAppointInfo(APP_ID, APDate,ApReason,docID){
    this.APatient.push({id:APP_ID,AppDate:APDate,AppReason:ApReason,DName:docID
 
    })
   
  }
      RemovePatientInfo(newPatient){
        let index =this.patients.indexOf(newPatient)
        this.patients.splice(index,1)
          //if(this.APatient.length<=0){

          //}
      }

  addPatient(PID,Pname,Psurname,Paddress,Ptown){
    this.patients.push({id:PID, name:Pname, surname:Psurname, address:Paddress, town:Ptown})
    }
    
getPatient(id){
  let selectedPatient = []
  this.patients.forEach(patient =>{
    if(patient.id == id){
    selectedPatient = patient
    }
});
return selectedPatient

}
    deletePatient(patient){
      let index =this.patients.indexOf(patient)
      this.patients.splice(index,1)
      }
      //admin
      editPatient(patient){
        let index = this.patients.indexOf(patient)
        let nPID = prompt("edit ID", patient.id)
        let nPname = prompt("edit name", patient.name)
        let nPsurname = prompt("edit surname", patient.surname)
        let nPaddress = prompt("edit address", patient.address)
        let nPtown = prompt("edit Town", patient.town)

        if (nPID !=null || nPname !=null || nPsurname!=null || nPaddress !=null || nPtown != null){
          this.patients[index].id=nPID
          this.patients[index].name= nPname
          this.patients[index].surname=nPsurname
          this.patients[index].address=nPaddress
          this.patients[index].town=nPtown
        }
       
      }
      RemoveAppointInfo(newPatient){
        let index =this.patients.indexOf(newPatient)
        this.patients.splice(index,1)
          //if(this.APatient.length<=0){

          //}
        }
            editAppointInfo(newApppoint){

          let index = this.APatient.indexOf(newApppoint)
          let APDate = prompt("edit ID", newApppoint.AppDate)
          let ApReason = prompt("edit name", newApppoint.ApReason)
          let DName = prompt("edit surname", newApppoint.DName)
          
          if (APDate !=null || ApReason !=null || DName!=null ){
            this.APatient[index].APDate=this.APDate
            this.APatient[index].ApReason= ApReason
            this.APatient[index].DName=DName
          }
      
        }
      
        getPatientInfo(){
         return this.patients
        }

        getAppointment(id){
          let selectedAppointment = []
          console.log(this.APatient);
          
          this.APatient.forEach(newApppoin =>{
            if(newApppoin.id == id){
              selectedAppointment.push(newApppoin)
            }
        });

        return selectedAppointment
      }
      //for doctor 
      addDoctor(docID,docName,DocSpecialization){
        this.doctorArr.push({doc_Id:docID,doc_name:docName,doc_specialization:DocSpecialization})
        
      }
      removeDoctor(newdoc){
        let index = this.doctorArr.indexOf(newdoc)
        this.doctorArr.splice(index,1)
        
      }
      //view doctor & appointment
      getDoctorInfo(docID){
          let selectedDoctor = []
          console.log(this.doctorArr);
          this.doctorArr.forEach(newDoctor =>{
            if(newDoctor.id == docID){
              selectedDoctor.push(newDoctor)
            }
        });

        return selectedDoctor
      }
  getDocAppoint(docID){
 let selectedAppointment=[]
 this.doctorArr.forEach(newDocAppoint =>{
   if(newDocAppoint.docID == this.docID){
     selectedAppointment.push(newDocAppoint)
   }
 })
    return selectedAppointment
  }
  addDoctAppointment(PID,APDate,docID){
    

  }
  viewDoctorAppointment(docID){
    
  }

      }
    