import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './composants/client/client.component';
import { FormsModule } from '@angular/forms';
import { InternauteComponent } from './composants/internaute/internaute.component';
import { MenuComponent } from './composants/menu/menu.component';
import { CarousselComponent } from './composants/caroussel/caroussel.component';
import { RechercherComponent } from './composants/rechercher/rechercher.component';
import { FormationComponent } from './composants/formation/formation.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    InternauteComponent,
    MenuComponent,
    FormationComponent,
    CarousselComponent,
    RechercherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
