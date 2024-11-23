import { hotel } from '../modeles/hotel';
import { HotelService } from './../services/hotel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit{
hotels:hotel[]=[]
id=1
  constructor(private hotelserv:HotelService){

  }
  ngOnInit(): void {
      this.hotelserv.getallhotel().subscribe(
        (tab)=>{
          this.hotels=tab
          console.log(this.hotels)
        }
      )
  }
}
