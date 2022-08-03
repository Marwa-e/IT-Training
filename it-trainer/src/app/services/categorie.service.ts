import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../interfaces/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private url: string = "http://localhost:8080/categories";
  constructor(private http : HttpClient) { }
  
  findByMere(id:number){
    return this.http.get<Categorie[]>(this.url+"/findByMere/"+id.toString());
  }
  getAllCategories() {
    return this.http.get<Categorie[]>(this.url);
  }
  getOneCategorie(id: number) {
    return this.http.get<Categorie>(this.url + '/' + id);
  }
  addCategorie(c: Categorie) {
    return this.http.post<Categorie>(this.url, c);
  }
  delCategorie(id: number) {
    return this.http.delete<Categorie>(this.url + '/' + id);
  }
  updateCategorie(c: Categorie) {
    return this.http.put<Categorie>(this.url + '/' + c, c);
  }
}
