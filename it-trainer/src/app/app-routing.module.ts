import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './composants/client/client.component';
import { InternauteComponent } from './composants/internaute/internaute.component';
import { HomeComponent } from './composants/home/home.component';
import { MenuComponent } from './composants/menu/menu.component';
import { LoginComponent } from './composants/login/login.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { CarousselComponent } from './composants/caroussel/caroussel.component';
import { RechercherComponent } from './composants/rechercher/rechercher.component';
import { ContactComponent } from './composants/contact/contact.component';
import { FormationComponent } from './composants/formation/formation.component';
import { EquipeComponent } from './composants/equipe/equipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'caroussel', component: CarousselComponent },
  { path: 'rechercher', component: RechercherComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'formation/:id', component: FormationComponent }, 
  { path: 'equipe', component: EquipeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'internaute', component: InternauteComponent }, 
  { path: 'internaute/:id', component: InternauteComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
