import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { reserver } from '../modeles/reserver';

@Component({
  selector: 'app-tableau-reservation',
  templateUrl: './tableau-reservation.component.html',
  styleUrls: ['./tableau-reservation.component.css']
})
export class TableauReservationComponent implements OnInit {
  reservation:reserver[]=[]
  constructor(private reserserv:ReservationService){

  }
  ngOnInit(): void {
      this.reserserv.getallreservation().subscribe(
       (resrev)=>{
        this.reservation=resrev
       }

       )
      
  }

}
