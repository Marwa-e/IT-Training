import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:5555/user";
  constructor(private http: HttpClient) { }
  checkUser(u: User) {
    return this.http.get<User[]>(`${this.url}?nom=${u.nom}&password=${u.password}`);
  }
  getAllUsers() {
    return this.http.get<User[]>(this.url);
  }
  getOneUser(id: number) {
    return this.http.get<User>(this.url + '/' + id);
  }
  addUser(f: User) {
    return this.http.post<User>(this.url, f);
  }
  delUser(id: number) {
    return this.http.delete<User>(this.url + '/' + id);
  }
  updateUser(f: User) {
    return this.http.put<User>(this.url + '/' + f.id, f);
  }
}
