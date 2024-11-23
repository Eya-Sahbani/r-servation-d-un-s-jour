import { reserver } from './../modeles/reserver';
import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../services/employer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { employer } from '../modeles/employer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../services/reservation.service';
import { HotelService } from '../services/hotel.service';
import { hotel } from '../modeles/hotel';

@Component({
  selector: 'app-choisimenbre',
  templateUrl: './choisimenbre.component.html',
  styleUrls: ['./choisimenbre.component.css']
})
export class ChoisimenbreComponent implements OnInit{
  emp!:employer
  counter=0;
  idem!:number;
  formreserv!:FormGroup;
  hotels:hotel[]=[];
  prix:number=0;
  constructor(private router:ActivatedRoute,private empserv:EmployerService,private fb:FormBuilder,private route:Router,private htlserv:HotelService,private resvserv:ReservationService){


  }
  ngOnInit(): void {
    this.router.params.subscribe(
      (param)=>{
        this.idem=param['id']
        console.log(this.idem)
      }
    )  


this.empserv.getempbyid(this.idem).subscribe(
  (tab)=>{
    this.emp=tab
    
  }
)
this.htlserv.getallhotel().subscribe(
  (tab)=>{
    this.hotels=tab
    
  }
)
this.formreserv=this.fb.group(
  {"conjoint":[""],
    "enfant1":[""],
    "enfant2":[""],
    "enfant3":[""],
    "date_debut":["",Validators.required],
    "nembre_nuit":["",Validators.required]
  },
  
 
)


  }
  calculer(htl:hotel){
console.log(htl)
this.prix=this.prix+htl.prixadult;
if(this.formreserv.controls["conjoint"].value){
this.prix=this.prix+htl.prixadult

}
if(this.formreserv.controls["enfant1"].value){
  if(this.emp.ageenfant1<12&&this.emp.ageenfant1>2){
this.prix=this.prix+htl.prixenfant
  }
  if(this.emp.ageenfant1>12){
    this.prix=this.prix+htl.prixadult
  }
}
if(this.formreserv.controls["enfant2"].value){
  if(this.emp.ageenfant2<12&&this.emp.ageenfant2>2){
this.prix=this.prix+htl.prixenfant
  }
  if(this.emp.ageenfant2>12){
    this.prix=this.prix+htl.prixadult
  }
}
if(this.formreserv.controls["enfant3"].value){
  if(this.emp.ageenfant3<12&&this.emp.ageenfant3>2){
this.prix=this.prix+htl.prixenfant
  }
  if(this.emp.ageenfant3>12){
    this.prix=this.prix+htl.prixadult
  }
}
this.prix=this.prix*this.formreserv.controls["nembre_nuit"].value
console.log(this.prix)
  }
  reserver(htl:hotel)
  {
    let reserv:reserver=new reserver()
    reserv.nom=this.emp.nom;
    reserv.prenom=this.emp.prenom;
    reserv.dated=this.formreserv.controls["date_debut"].value;
    reserv.nembreN=this.formreserv.controls["nembre_nuit"].value;
    reserv.nom=this.emp.nom
    reserv.hotel=htl.nom
    reserv.prix=this.prix
    reserv.gouvernerat=htl.gouvernerat
    reserv.agence=htl.agence
    if(this.formreserv.controls["conjoint"].value){
      
      reserv.conjoint=this.emp.conjoint
    }
    if(this.formreserv.controls["enfant1"].value){
      reserv.enfant1prenom=this.emp.prenomenfant1
      reserv.enfant1age=this.emp.ageenfant1
    }
    if(this.formreserv.controls["enfant2"].value){
      reserv.enfant1prenom=this.emp.prenonenfant2
      reserv.enfant1age=this.emp.ageenfant2
    }
    if(this.formreserv.controls["enfant3"].value){
      reserv.enfant1prenom=this.emp.prenonenfant3
      reserv.enfant1age=this.emp.ageenfant3
    }
    this.resvserv.addreservation(reserv).subscribe(
      (reservation)=>{
        console.log("ajouter")
      }
    )
    console.log(reserv)
    
  }
  incrimente(){
   
  }
  

}
