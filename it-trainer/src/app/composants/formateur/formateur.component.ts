import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/interfaces/formateur';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  id = 0;
  formateur : Formateur = {} ;
  formateurs : Formateur[] = [] ;

  constructor(private router : Router, private f : FormateurService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initFormateur();
  }
  ajouterFormateur() {
    this.f.addFormateur(this.formateur).subscribe(res => {
      this.initFormateur();
    })
  }
  supprimerFormateur(id : number) {
    this.f.delFormateur(id).subscribe(res => {
      this.initFormateur();
    })
  }
  modifierFormateur() {
    this.f.updateFormateur(this.formateur).subscribe(res => {
      this.initFormateur();
    })
  }
  chercherUnFormateur(id : number) {
    this.f.getOneFormateur(id).subscribe(res => {
      this.initFormateur();
    })
  }
  initFormateur() {
    this.f.getAllFormateurs().subscribe(res => {
      this.formateurs = res;
    })
  }
}
