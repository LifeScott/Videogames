import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  game = new Date();
  gamePrice :number = 59.99;
  
  constructor() { }

  ngOnInit() {
  }

}
