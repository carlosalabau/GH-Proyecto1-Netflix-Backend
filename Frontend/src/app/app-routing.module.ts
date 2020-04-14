import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MovieComponent } from './containers/movie/movie.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'movie', component: MovieComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
