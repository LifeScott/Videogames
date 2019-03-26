import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GameListComponent } from './game-list/game-list.component';
import { HomeComponent } from './home/home.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard';
import { LoginFormComponent } from './login-form/login-form.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'loginForm', component: LoginFormComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'game-list', component: GameListComponent, canActivate: [AuthGuard] },

  { path: 'list-edit', component: ListEditComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/loginForm', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameListComponent,
    HomeComponent,
    ListEditComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
