import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  myForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.createForm();
   }

   createForm(){
     this.myForm=this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
       });
   }

  ngOnInit() {
  }

}
