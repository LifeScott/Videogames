import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GameListComponent } from './game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'game-list', component: GameListComponent, canActivate: [AuthGuard] },

  { path: 'list-edit', component: ListEditComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '/login', pathMatch: 'full' }

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
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
