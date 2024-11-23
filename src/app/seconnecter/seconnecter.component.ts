import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css']
})
export class SeconnecterComponent implements OnInit {
  seconnecter!:FormGroup
constructor(private fb:FormBuilder,private route:Router,private empserv:EmployerService){

}
ngOnInit(): void {
    
  this.seconnecter=this.fb.group(
    {"matricule":["",Validators.required]}
  )
}
onsubmit(id:number){
  
  console.log(this.seconnecter)
  if(this.seconnecter.valid){
    if(this.seconnecter.controls["matricule"].value==100){
this.route.navigate(["tableau_reservation"])
    }else
    {
      console.log("form valid")
    this.route.navigate(["/choisimenbre",id])
    }
  }
 
}
}
