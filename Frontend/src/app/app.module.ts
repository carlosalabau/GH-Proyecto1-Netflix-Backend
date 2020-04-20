import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UsersService} from './services/users.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './containers/home/home.component';
import { UserComponent } from './containers/user/user.component';
import { InviteComponent } from './containers/invite/invite.component';
import { AdminComponent } from './containers/admin/admin.component';
import { MovieComponent } from './containers/movie/movie.component';
import { LoginComponent } from './containers/login/login.component';
import { LogoutComponent } from './containers/logout/logout.component';
import { RegisterComponent } from './containers/register/register.component';
import { PedidosComponent } from './containers/pedidos/pedidos.component';
import { DetallsComponent } from './containers/detalls/detalls.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { EditProfileComponent } from './containers/user/edit-profile/edit-profile.component';
import { OrdersComponent } from './containers/user/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    InviteComponent,
    AdminComponent,
    MovieComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    PedidosComponent,
    DetallsComponent,
    ProfileComponent,
    EditProfileComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
