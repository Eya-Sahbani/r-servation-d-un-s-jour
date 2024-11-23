import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { employer } from '../modeles/employer';
import { HttpClient } from '@angular/common/http';
import { responseauth } from '../modeles/responseauth';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
item=new BehaviorSubject(0)
counter=0
  constructor( private httpemp:HttpClient) { 
    this.item.subscribe(
      (x)=>{
        this.counter=x;
      }
    )
  }
  getempbyid(id:number):Observable<employer>{
    return this.httpemp.get<employer>("http://localhost:3000/employer/"+id)

  }
  onincrimente(){
    this.item.next(this.item.getValue()+1);
  }
 
}
