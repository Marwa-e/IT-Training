import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prerequis } from '../interfaces/prerequis';

@Injectable({
  providedIn: 'root'
})
export class PrerequisService {
  private url: string = "http://localhost:8080/prerequis";
  constructor(private http : HttpClient) { }

  getAllPrerequis() {
    return this.http.get<Prerequis[]>(this.url);
  }
  getOnePrerequis(id: number) {
    return this.http.get<Prerequis>(this.url + '/' + id);
  }
  addPrerequis(p: Prerequis) {
    return this.http.post<Prerequis>(this.url, p);
  }
  delPrerequis(id: number) {
    return this.http.delete<Prerequis>(this.url + '/' + id);
  }
  updatePrerequis(p: Prerequis) {
    return this.http.put<Prerequis>(this.url + '/' + p.id, p);
  }
}
