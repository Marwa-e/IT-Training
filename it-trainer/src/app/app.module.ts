import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './composants/client/client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternauteComponent } from './composants/internaute/internaute.component';
//import { UserLoginComponent } from './composants/user-login/user-login.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { MenuComponent } from './composants/menu/menu.component';
import { CarousselComponent } from './composants/caroussel/caroussel.component';
import { RechercherComponent } from './composants/rechercher/rechercher.component';
import { FormationComponent } from './composants/formation/formation.component';
import { LoginComponent } from './composants/login/login.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { HomeComponent } from './composants/home/home.component';
<<<<<<< HEAD
import { FormateurComponent } from './composants/formateur/formateur.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { EntrepriseComponent } from './composants/entreprise/entreprise.component';
=======
import { EquipeComponent } from './composants/equipe/equipe.component';

>>>>>>> 769d725e36cfe4a642bd227bf34eb102a8c596f2




@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    InternauteComponent,
   // UserLoginComponent,
    ConnexionComponent,
    HomeComponent,
    MenuComponent,
    FormationComponent,
    CarousselComponent,
    RechercherComponent,
    LoginComponent,
    InscriptionComponent,
<<<<<<< HEAD
    FormateurComponent,
    AdresseComponent,
    EntrepriseComponent
=======
    EquipeComponent,
    

    InscriptionComponent
>>>>>>> 769d725e36cfe4a642bd227bf34eb102a8c596f2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
