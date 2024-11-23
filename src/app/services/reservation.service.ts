
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reserver } from '../modeles/reserver';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpresrv:HttpClient) {

   }

addreservation(reserv:reserver):Observable<reserver>{
  return this.httpresrv.post<reserver>("http://localhost:3000/reservation/",reserv)
}
getallreservation():Observable<reserver[]>{
  return this.httpresrv.get<reserver[]>("http://localhost:3000/reservation")

}
}
