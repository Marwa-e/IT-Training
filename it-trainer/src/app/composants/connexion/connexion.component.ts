import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Internaute } from 'src/app/interfaces/internaute';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  utilisateur: Internaute = {};
  isConnected = false;
  constructor(private router: Router, private us: UserService) { }

  ngOnInit(): void {
  }

  connexion() {
    this.router.navigateByUrl(`/connexion`)
    this.us.checkUser(this.utilisateur).subscribe(res => {
      if (res.length > 0) {
        this.isConnected = true;
        const userString = JSON.stringify(res[0]);
        this.utilisateur = res[0];
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
