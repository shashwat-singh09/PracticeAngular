import { Component,inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
 username:string='shashwat';
id:number=1;


serviceObj=inject(DataService);

parentData:number=this.serviceObj.userId;



userobj:any={
  name:'ayush',

}
sendToChild(name){
  this.id=name;
  console.log(this.serviceObj.userName);
  console.log(this.serviceObj.userId);
  console.log(this.serviceObj.getSum(100,200));

}
x:number=0;
y:number=2;
}
