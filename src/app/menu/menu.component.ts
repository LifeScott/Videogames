import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  name: string;
  menuList: MenuItem[] = [
    { id: 1, descrizione: 'Home', selezionato: false, linkPath: 'home' },
    { id: 2, descrizione: 'List', selezionato: false, linkPath: 'game-list' },
    { id: 3, descrizione: 'Edit', selezionato: false, linkPath: 'list-edit' }
  ];

  @Output('showSection')
  showSectionEvent: EventEmitter<number> = new EventEmitter();

  constructor(private loginService: LoginService) {
    this.loginService.changeLogin$.subscribe(value => {
      this.name = value;
    })
  }

  ngOnInit() {

  }

  showSection(id: number) {
    this.showSectionEvent.emit(id);
  }

}
