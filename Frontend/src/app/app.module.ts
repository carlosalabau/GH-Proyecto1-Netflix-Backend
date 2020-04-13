import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './containers/home/home.component';
import { SingInComponent } from './containers/sing-in/sing-in.component';
import { SingUpComponent } from './containers/sing-up/sing-up.component';
import { UserComponent } from './containers/user/user.component';
import { InviteComponent } from './containers/invite/invite.component';
import { AdminComponent } from './containers/admin/admin.component';
import { MovieComponent } from './containers/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SingInComponent,
    SingUpComponent,
    UserComponent,
    InviteComponent,
    AdminComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
