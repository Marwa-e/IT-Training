import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Internaute } from '../interfaces/internaute';

@Injectable({
  providedIn: 'root'
})
export class InternauteService {
  private url: string = "http://localhost:8080/internautes";
  constructor(private http: HttpClient) { }

  getAllInternautes() {
    return this.http.get<Internaute[]>(this.url);
  }
  getOneInternaute(id: number) {
    return this.http.get<Internaute>(this.url + '/' + id);
  }
  addInternaute(f: Internaute) {
    return this.http.post<Internaute>(this.url, f);
  }
  delInternaute(id: number) {
    return this.http.delete<Internaute>(this.url + '/' + id);
  }
  updateInternaute(f: Internaute) {
    return this.http.put<Internaute>(this.url + '/' + f.id, f);
  }
  checkUser(u: Internaute) {
    return this.http.get<Internaute[]>(`${this.url}?nom=${u.nom}&password=${u.password}`);
  }
}
