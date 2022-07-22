import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private url: string = "http://localhost:5555/entreprise";
  constructor(private http: HttpClient) { }
  
}
