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
import { RegisterComponent } from './containers/register/register.component';
import { PedidosComponent } from './containers/pedidos/pedidos.component';
import { DetallsComponent } from './containers/detalls/detalls.component';
import { EditProfileComponent } from './containers/user/edit-profile/edit-profile.component';
import { OrdersComponent } from './containers/user/orders/orders.component';
import { ProfileComponent } from './containers/user/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RecoverComponent } from './containers/recover/recover.component';
import { InfoMovieComponent } from './containers/admin/movie/info-movie/info-movie.component';
import { AddUserComponent } from './containers/admin/users/add-user/add-user.component';
import { InfoUserComponent } from './containers/admin/users/info-user/info-user.component';
import { AddOrderComponent } from './containers/admin/add-order/add-order.component';
import { AddMovieComponent } from './containers/admin/movie/add-movie/add-movie.component';
import { EditMovieComponent } from './containers/admin/movie/edit-movie/edit-movie.component';

registerLocaleData(es);

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
    RegisterComponent,
    PedidosComponent,
    DetallsComponent,
    ProfileComponent,
    EditProfileComponent,
    OrdersComponent,
    RecoverComponent,
    InfoMovieComponent,
    InfoUserComponent,
    AddUserComponent,
    AddOrderComponent,
    AddMovieComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [UsersService, { provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
