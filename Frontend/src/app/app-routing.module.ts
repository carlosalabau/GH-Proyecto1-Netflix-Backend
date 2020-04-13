import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MovieComponent } from './containers/movie/movie.component';
import { SingInComponent } from './containers/sing-in/sing-in.component';
import { SingUpComponent } from './containers/sing-up/sing-up.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'movie', component: MovieComponent },
  {path: 'singin', component: SingInComponent },
  {path: 'sinup', component: SingUpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
