import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { Formation } from 'src/app/interfaces/formation';
import { FormationsService } from 'src/app/services/formations.service';
import { NiveauService } from 'src/app/services/niveau.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formation : Formation = {}
  formations : Formation[] = []
  categoriesEnCours : Categorie[]=[]

  constructor(private router : Router, private f : FormationsService, private nv: NiveauService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initFormation();
  }
  ajouterFormation() {
    this.f.addFormation(this.formation).subscribe(res => {
      this.initFormation();
    })
  }
  supprimerFormation(id : number) {
    this.f.delFormation(id).subscribe(res => {
      this.initFormation();
    })
  }
  modifierFormation() {
    this.f.updateFormation(this.formation).subscribe(res => {
      this.initFormation();
    })
  }
  chercherUneFormation() {

  }
  initFormation(id:number=1) {
    this.f.getAllFormations().subscribe(res => {
      this.formations = res;
      this.formations.forEach(f=>{
       if ( f.categorie?.mere?.id==id){
        this.categoriesEnCours.push(f);
       }
      })
      
    })

  }

}
