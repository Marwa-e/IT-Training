import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from '../interfaces/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private url: string = "http://localhost:5555/entreprise";
  constructor(private http: HttpClient) { }
  getAllEntreprises() {
    return this.http.get<Entreprise[]>(this.url);
  }
  getOneEntreprise(id: number) {
    return this.http.get<Entreprise>(this.url + '/' + id);
  }
  addEntreprise(f: Entreprise) {
    return this.http.post<Entreprise>(this.url, f);
  }
  delEntreprise(id: number) {
    return this.http.delete<Entreprise>(this.url + '/' + id);
  }
  updateEntreprise(f: Entreprise) {
    return this.http.put<Entreprise>(this.url + '/' + f.id, f);
  }
}
