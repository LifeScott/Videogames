import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string
  password: string
  saveData() {
    if (this.username === 'test' && this.password === 'test') {
      sessionStorage.user = this.username;
      this.router.navigateByUrl('/home');
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
