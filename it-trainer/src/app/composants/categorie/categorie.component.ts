import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categorie : Categorie = {} ;
  categories : Categorie[] = [] ;

  constructor(private router : Router, private route : ActivatedRoute, private c : CategorieService) { }

  ngOnInit(): void {
    this.initFormateur();
  }
  ajouterCategorie() {
    this.c.addCategorie(this.categorie).subscribe(res => {
      this.initFormateur();
    })
  }
  supprimerCategorie(id : number) {
    this.c.delCategorie(id).subscribe(res => {
      this.initFormateur();
    })
  }
  modifierCategorie() {
    this.c.updateCategorie(this.categorie).subscribe(res => {
      this.initFormateur();
    })
  }
  chercherUnCategorie(id : number) {
    this.c.getOneCategorie(id).subscribe(res => {
      this.initFormateur();
    })
  }
  initFormateur() {
    this.c.getAllCategories().subscribe(res => {
      this.categories = res;
    })
  }

}
