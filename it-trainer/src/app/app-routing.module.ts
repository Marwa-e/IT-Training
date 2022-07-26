import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './composants/client/client.component';
import { InternauteComponent } from './composants/internaute/internaute.component';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'internaute', component: InternauteComponent }, 
  { path: 'internaute/:id', component: InternauteComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
