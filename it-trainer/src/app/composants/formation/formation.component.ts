import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { Formation } from 'src/app/interfaces/formation';
import { AdresseService } from 'src/app/services/adresse.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { FormationsService } from 'src/app/services/formations.service';
import { NiveauService } from 'src/app/services/niveau.service';
import { PrerequisService } from 'src/app/services/prerequis.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formation : Formation = {}
  formations : Formation[] = []
  categoriesEnCours : Categorie[]=[]

  constructor(private router : Router, private f : FormationsService, private route: ActivatedRoute, private c : CategorieService, private a : AdresseService, private nv : NiveauService, private p : PrerequisService) { }

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
  chercherUneFormation(id : number) {
    this.f.getOneFormation(id).subscribe(res => {
      this.initFormation();
    })
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
