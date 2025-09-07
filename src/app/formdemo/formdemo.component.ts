import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrl: './formdemo.component.css'
})
export class FormdemoComponent {
userLoginForm=new FormGroup({
  username:new FormControl(''),
  password:new FormControl(''),
  address:new FormGroup({
    city:new FormControl(''),
    pincode:new FormControl('')
  })
});


onFormSubmit(){
  console.log(this.userLoginForm.value);
  
}
}
