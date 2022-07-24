import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url: string = "http://localhost:5555/client";
  constructor(private http: HttpClient) { }
  checkClient(c: Client) {
    return this.http.get<Client[]>(`${this.url}?nom=${c.nom}&prenom=${c.prenom}`)
  }
}
