import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Niveau } from '../interfaces/niveau';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {
  private url: string = "http://localhost:8080/niveaux";
  constructor(private http: HttpClient) { }

  getAllNiveaux() {
    return this.http.get<Niveau[]>(this.url);
  }
  getOneNiveau(id: number) {
    return this.http.get<Niveau>(this.url + '/' + id);
  }
  addNiveau(n: Niveau) {
    return this.http.post<Niveau>(this.url, n);
  }
  delNiveau(id: number) {
    return this.http.delete<Niveau>(this.url + '/' + id);
  }
  updateNiveau(n: Niveau) {
    return this.http.put<Niveau>(this.url + '/' + n.id, n);
  }
}
