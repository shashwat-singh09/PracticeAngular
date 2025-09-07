import { Component,OnInit,inject } from '@angular/core';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit{

  usernameobj=inject(UsernameService);

  ngOnInit(): void {
    
  }
}
