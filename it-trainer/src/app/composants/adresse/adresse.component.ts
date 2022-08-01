import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adresse } from 'src/app/interfaces/adresse';
import { AdresseService } from 'src/app/services/adresse.service';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  adresse : Adresse = {} ;
  adresses : Adresse[] = [] ;

  constructor(private router : Router, private a : AdresseService) { }

  ngOnInit(): void {
    this.initAdresse();
  }
  ajouterAdresse() {
    this.a.addAdresse(this.adresse).subscribe(res => {
      this.initAdresse();
    })
  }
  supprimerAdresse() {

  }
  modifierAdresse() {
    this.a.updateAdresse(this.adresse).subscribe(res => {
      this.initAdresse();
    })
  }
  chercherUneAdresse() {

  }
  initAdresse() {
    this.a.getAllAdresses().subscribe(res => {
      this.adresses = res;
    })
  }

}
