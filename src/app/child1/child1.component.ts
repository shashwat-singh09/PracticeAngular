import { Component,inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
child1ServiceObj=inject(DataService);

// child1Data:number;

a :number=10;

}
