import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortadaComponent } from './containers/portada/portada.component';
import { HomeComponent } from './containers/home/home.component'
 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PortadaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
