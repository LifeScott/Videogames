import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GameListComponent } from './game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },

  { path: 'game-list', component: GameListComponent },

  { path: 'list-edit', component: ListEditComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameListComponent,
    HomeComponent,
    ListEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
