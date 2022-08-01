import { HttpRequest } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Internaute } from 'src/app/interfaces/internaute'
import { Niveau } from 'src/app/interfaces/niveau'
import { InternauteService } from 'src/app/services/internaute.service'
import { NiveauService } from 'src/app/services/niveau.service'

@Component({
  selector: 'app-internaute',
  templateUrl: './internaute.component.html',
  styleUrls: ['./internaute.component.css']
})
export class InternauteComponent implements OnInit {
  currentId=0
  currentInternaute:Internaute= {}
  assup=0
  internaute: Internaute = {}
  internautes: Internaute[] = []
  niveaux: Niveau[] = []
  niveau:Niveau={}
  niveauIntitule?:string

  constructor(private route: ActivatedRoute,private cl: InternauteService,private nv: NiveauService, private router: Router) {
    // ici on récupère l'id en paramètre de get pour afficher le formulaire avec les bons placeholder et modifier un Internaute
    this.currentId= route.pathFromRoot[route.pathFromRoot.length - 1].snapshot.params["id"]
   }

  ngOnInit(): void {
    this.initInternaute()
  }

  ajouterInternaute() {
    this.cl.addInternaute(this.internaute).subscribe(res => {
      this.initInternaute()
    })
  }

  ajouterALaListe() {
    this.internautes.push({ ...this.internaute }) //spread operator
    this.internaute = {}
  }

  supprimerInternaute(id:number) {
    this.cl.delInternaute(id).subscribe(res => {
      this.initInternaute()
    })
  }

  modifierInternaute() {
    this.cl.updateInternaute(this.internaute).subscribe(res => {
      this.router.navigateByUrl('/internaute')
    })
  }

  afficherInternaute(id:number){
    this.cl.getOneInternaute(id).subscribe(respo => {
      this.internaute = respo 
      this.router.navigateByUrl('/internaute/'+this.currentId)
    })
  }

  getOneNiveau(id:number){
  this.nv.getOneNiveau(id).subscribe(resul => {
    this.niveau = resul
    this.niveauIntitule=this.niveau.intitule
  })
}
  
  initInternaute() {

    this.nv.getAllNiveaux().subscribe(resul => {
      this.niveaux = resul
    })
    this.cl.getAllInternautes().subscribe(res => {
      this.internautes = res
    })

  }
}
