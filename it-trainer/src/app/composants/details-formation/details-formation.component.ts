import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/interfaces/formation';
import { FormationsService } from 'src/app/services/formations.service';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.css']
})
export class DetailsFormationComponent implements OnInit {
  id = 0;
  formation! : Formation;
  formations : Formation[] = [];
  formationsEnCours: Formation[] = [];

  constructor(private router : Router, private route : ActivatedRoute, private f : FormationsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.id = Number(res.get('id'));
      this.f.getOneFormation(this.id).subscribe(res => {
        this.formation = res;
      })
    })
  }
  modifierFormation() {
    this.f.updateFormation(this.formation).subscribe(res => {
      this.router.navigateByUrl('/formation');
    })
  }
  supprimerFormation(id : number) {
    this.f.delFormation(id).subscribe(res => {
      this.router.navigateByUrl('/formation');
    })
  }
  chercherUneFormation(id : number) {
    this.f.getOneFormation(id).subscribe(res => {
      this.router.navigateByUrl('/formation');
      this.formationsEnCours.push(this.formation);
    })
  }
  ajouterFormation() {
    this.f.addFormation(this.formation).subscribe(res => {
      this.router.navigateByUrl('/formation');
    })
  }
  chercherUnNiveau(id_niveau : number) {
    this.f.getOneNiveau(id_niveau).subscribe(res => {
      this.router.navigateByUrl('/formation');
    })
  }

}
