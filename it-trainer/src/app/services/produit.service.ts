import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url: string = "http://localhost:5555/produit";
  constructor(private http: HttpClient) { }
  getAllProduits() {
    return this.http.get<Produit[]>(this.url);
  }
  getOneProduit(id: number) {
    return this.http.get<Produit>(this.url + '/' + id);
  }
  addProduit(f: Produit) {
    return this.http.post<Produit>(this.url, f);
  }
  delProduit(id: number) {
    return this.http.delete<Produit>(this.url + '/' + id);
  }
  updateProduit(f: Produit) {
    return this.http.put<Produit>(this.url + '/' + f.id, f);
  }
}
