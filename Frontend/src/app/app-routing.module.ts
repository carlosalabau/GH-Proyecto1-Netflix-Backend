import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MovieComponent } from './containers/movie/movie.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { UserComponent } from './containers/user/user.component';
import { AdminComponent } from './containers/admin/admin.component';
import { DetallsComponent } from './containers/detalls/detalls.component';
import { EditProfileComponent } from './containers/user/edit-profile/edit-profile.component';
import { OrdersComponent } from './containers/user/orders/orders.component';
import { ProfileComponent } from './containers/user/profile/profile.component';
import { RecoverComponent } from './containers/recover/recover.component';
import { AddMovieComponent } from './containers/admin/movie/add-movie/add-movie.component';
import { EditMovieComponent } from './containers/admin/movie/edit-movie/edit-movie.component';
import { InfoMovieComponent } from './containers/admin/movie/info-movie/info-movie.component';
import { AddUserComponent } from './containers/admin/users/add-user/add-user.component';
import { EditUserComponent } from './containers/admin/users/edit-user/edit-user.component';
import { InfoUserComponent } from './containers/admin/users/info-user/info-user.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'movie', component: MovieComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'user', component: UserComponent },
  {path: 'user/profile', component: ProfileComponent },
  {path: 'user/editProfile', component: EditProfileComponent },
  {path: 'user/orders', component: OrdersComponent },
  {path: 'detalls', component: DetallsComponent },
  {path: 'admin', component: AdminComponent },
  {path: 'recover', component: RecoverComponent },
  {path: 'admin/addMovie', component: AddMovieComponent },
  {path: 'admin/editMovie', component: EditMovieComponent },
  {path: 'admin/infoMovie', component: InfoMovieComponent },
  {path: 'admin/addUser', component: AddUserComponent },
  {path: 'admin/editUser', component: EditUserComponent },
  {path: 'admin/infoUser', component: InfoUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
