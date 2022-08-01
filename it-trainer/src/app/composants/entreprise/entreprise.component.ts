import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from 'src/app/interfaces/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  entreprise : Entreprise = {} ;
  entreprises : Entreprise[] = [] ;

  constructor(private router : Router, private e : EntrepriseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initEntreprise();
  }
  ajouterEntreprise() {
    this.e.addEntreprise(this.entreprise).subscribe(res => {
      this.initEntreprise();
    })
  }
  supprimerEntreprise(id : number) {
    this.e.delEntreprise(id).subscribe(res => {
      this.initEntreprise();
    })
  }
  modifierEntreprise() {
    this.e.updateEntreprise(this.entreprise).subscribe(res => {
      this.initEntreprise();
    })
  }
  chercherUneEntreprise(id : number) {
    this.e.getOneEntreprise(id).subscribe(res => {
      this.initEntreprise();
    })
  }
  initEntreprise() {
    this.e.getAllEntreprises().subscribe(res => {
      this.entreprises = res;
    })
  }

}
