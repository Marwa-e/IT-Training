
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './composants/client/client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternauteComponent } from './composants/internaute/internaute.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { CarousselComponent } from './composants/caroussel/caroussel.component';
import { RechercherComponent } from './composants/rechercher/rechercher.component';
import { FormationComponent } from './composants/formation/formation.component';
import { LoginComponent } from './composants/login/login.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { HomeComponent } from './composants/home/home.component';
import { FormateurComponent } from './composants/formateur/formateur.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { EntrepriseComponent } from './composants/entreprise/entreprise.component';
import { EquipeComponent } from './composants/equipe/equipe.component';
import { PrerequisComponent } from './composants/prerequis/prerequis.component';
import { MenuComponent } from './composants/menu/menu.component';
import { FooterComponent } from './composants/footer/footer.component';
import { CategorieComponent } from './composants/categorie/categorie.component';
import { UserComponent } from './composants/user/user.component';
import { RegisterComponent } from './composants/register/register.component';
import { ContactComponent } from './composants/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    InternauteComponent,
    ConnexionComponent,
    HomeComponent,
    MenuComponent,
    FormationComponent,
    CarousselComponent,
    RechercherComponent,
    LoginComponent,
    InscriptionComponent,
    FormateurComponent,
    AdresseComponent,
    EntrepriseComponent,
    EquipeComponent,
    FooterComponent,
    PrerequisComponent,
    CategorieComponent,
    UserComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
