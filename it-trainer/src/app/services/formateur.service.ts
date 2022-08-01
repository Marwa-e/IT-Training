import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../interfaces/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private url: string = "http://localhost:8080/formateurs";
  constructor(private http: HttpClient) { }
  getAllFormateurs() {
    return this.http.get<Formateur[]>(this.url);
  }
  getOneFormateur(id: number) {
    return this.http.get<Formateur>(this.url + '/' + id);
  }
  addFormateur(f: Formateur) {
    return this.http.post<Formateur>(this.url, f);
  }
  delFormateur(id: number) {
    return this.http.delete<Formateur>(this.url + '/' + id);
  }
  updateFormateur(f: Formateur) {
    return this.http.put<Formateur>(this.url + '/' + f.id, f);
  }
}
