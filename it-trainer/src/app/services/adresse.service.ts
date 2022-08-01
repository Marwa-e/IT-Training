import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adresse } from '../interfaces/adresse';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {
  private url: string = "http://localhost:8080/adresses";
  constructor(private http : HttpClient) { }
  getAllAdresses() {
    return this.http.get<Adresse[]>(this.url);
  }
  getOneAdresse(id: number) {
    return this.http.get<Adresse>(this.url + '/' + id);
  }
  addAdresse(a: Adresse) {
    return this.http.post<Adresse>(this.url, a);
  }
  delAdresse(id: number) {
    return this.http.delete<Adresse>(this.url + '/' + id);
  }
  updateAdresse(a: Adresse) {
    return this.http.put<Adresse>(this.url + '/' + a, a);
  }
}
