import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MovieComponent } from './containers/movie/movie.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { UserComponent } from './containers/user/user.component';
import { AdminComponent } from './containers/admin/admin.component';
import { DetallsComponent } from './containers/detalls/detalls.component';
import { ProfileComponent } from './containers/user/profile/profile.component';
import { EditProfileComponent } from './containers/user/edit-profile/edit-profile.component';
import { OrdersComponent } from './containers/user/orders/orders.component';


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
  {path: 'admin', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
