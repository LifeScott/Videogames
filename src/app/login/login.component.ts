import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  protected username: string
  protected password: string

  saveData() {
    if ((this.username === 'test' && this.password === 'test') || (this.username === 'admin' && this.password === 'admin')) {
      sessionStorage.user = this.username;
      this.router.navigateByUrl('/home');
      this.loginService.loginChanged();
      return true;
    }
  }


  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

}