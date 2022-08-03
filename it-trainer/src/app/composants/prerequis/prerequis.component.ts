import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prerequis } from 'src/app/interfaces/prerequis';
import { FormationsService } from 'src/app/services/formations.service';
import { PrerequisService } from 'src/app/services/prerequis.service';

@Component({
  selector: 'app-prerequis',
  templateUrl: './prerequis.component.html',
  styleUrls: ['./prerequis.component.css']
})
export class PrerequisComponent implements OnInit {

  prerequis : Prerequis = {}
  //prerequis : Prerequis[] = []

  constructor(private router : Router, private route : ActivatedRoute, private p : PrerequisService) { }

  ngOnInit(): void {
  }
  ajouterPrerequis() {
    this.p.addPrerequis(this.prerequis).subscribe(res => {

    })
  }
  supprimerPrerequis(id : number) {
    this.p.delPrerequis(id).subscribe(res => {

    })
  }
  modifierPrerequis() {
    this.p.updatePrerequis(this.prerequis).subscribe(res => {

    })
  }
  chercherUnPrerequis(id : number) {
    this.p.getOnePrerequis(id).subscribe(res => {
      
    })
  }

}
