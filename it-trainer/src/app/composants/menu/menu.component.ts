import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categoriesInitiales:Categorie[]=[]
  constructor(private route: ActivatedRoute,private cat:CategorieService,private router:Router) { }

  ngOnInit(): void {
    this.cat.findByMere(1).subscribe(resul => {
      this.categoriesInitiales=resul;
    })
  }
}
