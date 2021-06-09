import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:8080/security/users';

  constructor(private http: HttpClient) { }

  userRegister(usuario: Usuario){
    return this.http.post(`${this.BASE_URL}/add`, usuario);
  }

  getUsers() {
    return this.http.get(`${this.BASE_URL}/all`);
  }

  deleteUser( id: string ) {
    return this.http.delete(`${this.BASE_URL}/delete/${id}`);
  }

  editUser(usuario: Usuario) {
    return this.http.put(`${this.BASE_URL}/update`, usuario);
  }


}
