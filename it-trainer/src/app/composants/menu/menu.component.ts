import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/interfaces/categorie';
import { Formation } from 'src/app/interfaces/formation';
import { CategorieService } from 'src/app/services/categorie.service';
import { FormationsService } from 'src/app/services/formations.service';
import { AuthService } from '../auth/auth.service';
import { AuthLoginInfo } from '../auth/login-info';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo!: AuthLoginInfo;
  formation: any = {};
  formations: Formation[] = []
  categoriesEnCours: Categorie[] = []

  categoriesInitiales:Categorie[]=[]
  constructor(private route: ActivatedRoute,private cat:CategorieService,private router:Router,
    private authService: AuthService, private tokenStorage: TokenStorageService, private f : FormationsService) { }

  ngOnInit(): void {
    this.cat.findByMere(1).subscribe(resul => {
      this.categoriesInitiales=resul;
    })

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  displayStyle = "none";

  openPopup(){
    this.displayStyle = "block";
  }

  closePopup(){
    this.displayStyle = "none";
  }

  onSubmit() {
    console.log(this.form);
 
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);
 
    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.accessToken);
        this.tokenStorage.saveAuthorities(data.authorities);
 
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
 
  reloadPage() {
    window.location.reload();
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
  chercherUneCategorie(id : number) {
    this.f.getOneCategorie(id).subscribe(res => {
      this.initFormation()
    })
  
}
initFormation() {
  this.f.getAllFormations().subscribe(res => {
    this.formations = res;
    //  res.forEach(c => {
    //    if (c.categorie?.mere?.id == this.id) {
    //       this.categoriesEnCours.push(c);
    //    }
    //  })
  })

}
}
