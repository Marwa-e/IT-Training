import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url: string = "http://localhost:5555/client";
  constructor(private http: HttpClient) { }

  getAllClients() {
    return this.http.get<Client[]>(this.url);
  }
  addClient(cl: Client) {
    return this.http.post<Client>(this.url + "?nom=" + cl.nom + "&prenom=" + cl.prenom + "&email=" + cl.email, cl)
  }
  delClient(id: number) {
    return this.http.delete<Client>(this.url + "/" + id)
  }
  updateClient(cl: Client) {
    return this.http.put<Client>(this.url + "/" + cl.id, cl);
  }
}
