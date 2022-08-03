import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prerequis } from 'src/app/interfaces/prerequis';
import { PrerequisService } from 'src/app/services/prerequis.service';

@Component({
  selector: 'app-prerequis',
  templateUrl: './prerequis.component.html',
  styleUrls: ['./prerequis.component.css']
})
export class PrerequisComponent implements OnInit {

  prerequis : Prerequis = {}
  prerequises : Prerequis[] = []

  constructor(private router : Router, private route : ActivatedRoute, private p : PrerequisService) { }

  ngOnInit(): void {
    this.initPrerequis();
  }
  ajouterPrerequis() {
    this.p.addPrerequis(this.prerequis).subscribe(res => {
      this.initPrerequis();
    })
  }
  supprimerPrerequis(id : number) {
    this.p.delPrerequis(id).subscribe(res => {
      this.initPrerequis();
    })
  }
  modifierPrerequis() {
    this.p.updatePrerequis(this.prerequis).subscribe(res => {
      this.initPrerequis();
    })
  }
  chercherUnPrerequis(id : number) {
    this.p.getOnePrerequis(id).subscribe(res => {
      this.initPrerequis();
    })
  }
  initPrerequis() {
    this.p.getAllPrerequis().subscribe(res => {
      this.prerequises = res;
    })
  }

}
