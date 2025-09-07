import { Component,Input,Output,EventEmitter,inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


  childService=inject(DataService);

  @Input() dataUser:string;
  @Input() dataId:number;
@Input() dataFromChild1:any;

 DataToParent:number=100;
 @Output() myEvent=new EventEmitter;

 anotherDataParent;number=1000;
 @Output() newMyEvent=new EventEmitter;

 sendDataToParent(){
   this.newMyEvent.emit(this.anotherDataParent);
  this.myEvent.emit(this.DataToParent);
  console.log(this.childService.userName);
  console.log(this.childService.userId);
  console.log(this.childService.getSum(200,300));

 }

 

}
