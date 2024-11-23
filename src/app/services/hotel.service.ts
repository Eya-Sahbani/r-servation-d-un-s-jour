import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hotel } from '../modeles/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httphtl:HttpClient) { 

  }

getallhotel():Observable<hotel[]>{
return this.httphtl.get<hotel[]>("http://localhost:3000/hotels")
}


}
