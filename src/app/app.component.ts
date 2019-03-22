import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  idSectionToShow: number = 1;
  title = 'Videogames';

  changeSection(id: number) {
    this.idSectionToShow = id;
}
}
