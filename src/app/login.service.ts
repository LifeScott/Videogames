import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private changeLogin: BehaviorSubject<string> = new BehaviorSubject(sessionStorage.getItem('user'));

  public changeLogin$ = this.changeLogin.asObservable();
  constructor() { 
  }

  loginChanged(){
    this.changeLogin.next(sessionStorage.getItem('user'));
  }
}
