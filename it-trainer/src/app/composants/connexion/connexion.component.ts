import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Internaute } from 'src/app/interfaces/internaute';
import { InternauteService } from 'src/app/services/internaute.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  internaute: Internaute = {};
  isConnected = false;
  constructor(private router: Router, private us: InternauteService) { }

  ngOnInit(): void {
  this.internaute.nom = '';
  }

  connexion() {
    this.router.navigateByUrl(`/connexion`)
    this.us.checkUser(this.internaute).subscribe(res => {
      if (res.length > 0) {
        this.isConnected = true;
        const userString = JSON.stringify(res[0]);
        this.internaute = res[0];
        localStorage.setItem('user', userString);
      }
    })
  }
  deconnexion() {
    this.isConnected = false;
    localStorage.removeItem('user');
  }
  inscription() {

  }
}
