import { Component, OnInit,inject } from '@angular/core';
import { UsernameService } from '../username.service';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit{
 usernameObj=inject(UsernameService);

 
  ngOnInit(): void {
    
  }
}
