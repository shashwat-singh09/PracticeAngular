import { Injectable, signal } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  
   }

  userId:number=1;
  userName:string='xyz';

  getSum(x,y){
    return x+y;
  }

  username:string='suresh';
  a=new BehaviorSubject(this.username);


   
}
