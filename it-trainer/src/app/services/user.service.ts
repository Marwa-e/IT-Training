import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:5555/users";
  constructor(private http: HttpClient) { }
  checkUser(u: User) {
    return this.http.get<User[]>(`${this.url}?nom=${u.nom}&password=${u.password}`);
  }
}
