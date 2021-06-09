import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../models/user.model';
import * as cryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:8080/security/users';

  constructor(private http: HttpClient) { }

  userRegister(usuario: Usuario){
    let {id,nombre,correo,type} = usuario;
    let password = cryptoJS.SHA256(usuario.password).toString();
    console.log(password);
    return this.http.post(`${this.BASE_URL}/add`, {id,nombre,correo,password,type});
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
