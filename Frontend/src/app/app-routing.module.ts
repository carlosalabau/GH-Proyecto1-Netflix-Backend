import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MovieComponent } from './containers/movie/movie.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { UserComponent } from './containers/user/user.component';
import { PedidosComponent } from './containers/pedidos/pedidos.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'movie', component: MovieComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'user', component: UserComponent },
  {path: 'pedidos', component: PedidosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
