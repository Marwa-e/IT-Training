import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/interfaces/formation';
import { FormationsService } from 'src/app/services/formations.service';
import { NiveauService } from 'src/app/services/niveau.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formation : Formation = {} ;
  formations : Formation[] = [] ;

  constructor(private router : Router, private f : FormationsService, private nv: NiveauService) { }

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
  initFormation() {
    this.f.getAllFormations().subscribe(res => {
      this.formations = res;
    })
  }

}
