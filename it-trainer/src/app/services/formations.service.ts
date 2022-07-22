import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../interfaces/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {
  private url: string = "http://localhost:5555/filrouge_produit";
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
}
