import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../interfaces/categorie';
import { Formation } from '../interfaces/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {
  private url: string = "http://localhost:8080/formations";
  constructor(private http: HttpClient) { }
  getAllFormations() {
    return this.http.get<Formation[]>(this.url);
  }
  getOneFormation(id: number) {
    return this.http.get<Formation>(this.url + '/' + id);
  }
  addFormation(f: Formation) {
    return this.http.post<Formation>(this.url, f);
  }
  delFormation(id: number) {
    return this.http.delete<Formation>(this.url + '/' + id);
  }
  updateFormation(f: Formation) {
    return this.http.put<Formation>(this.url + '/' + f.id, f);
  }
  getOneLieu(lieu: string) {
    return this.http.get<Formation>(this.url + '/' + lieu);
  }
  getOneNiveau(id_niveau: number) {
    return this.http.get<Formation>(this.url + '/' + id_niveau);
  }
  getOnePrerequis(lien_Test : string) {
    return this.http.get<Formation>(this.url + '/' + lien_Test);
  }
  getOneImage(lien_image : string) {
    return this.http.get<Formation>(this.url + '/' + lien_image);
  }
  getOneCategorie(id: number) {
    return this.http.get<Categorie>(this.url + '/' + id);
  }
}
