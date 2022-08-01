import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private url: string = "http://localhost:8080/categories";
  constructor(private http : HttpClient) { }
  
}
